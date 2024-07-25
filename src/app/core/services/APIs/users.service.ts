import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, filter, switchMap, tap, shareReplay, catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { GenericDataModel, PagedResponseModel } from '../../models/pagable.model';
import { UserInfoModel } from '../../models/user.medel';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private readonly _model = 'users';

    private usersPageMap = new Map<number, PagedResponseModel<UserInfoModel>>();

    constructor(private httpClient: HttpClient) { }

    getUsers(page: number) {
        if (this.usersPageMap.has(page))
            return of(this.usersPageMap.get(page));
        return this.httpClient.get<PagedResponseModel<UserInfoModel>>
            (environment.apiUrl + `${this._model}?page=${page}`)
            .pipe(tap(res => this.usersPageMap.set(page, res)));
    }

    getUser(userId: number | string): Observable<UserInfoModel | null> {
        if (!userId) return of(null);
        if (typeof userId == 'string') {
            if (isNaN(+userId)) return of(null)
            userId = parseInt(userId);
        }

        // Check if users data has been cached before
        let foundUser: UserInfoModel | null = null;
        for (let [page, users] of Array.from(this.usersPageMap)) {
            foundUser = users.data.find(_user => _user.id === userId);
            if (foundUser) return of(foundUser);
        }
        return this.httpClient.get<GenericDataModel<UserInfoModel>>
            (environment.apiUrl + `${this._model}/${userId}`)
            .pipe(
                map(res => res.data),
                catchError(e => of(null))
            );
    }
}

