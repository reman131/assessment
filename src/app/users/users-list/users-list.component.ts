import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserInfoModel } from 'src/app/core/models/user.medel';
import { UsersService } from 'src/app/core/services/APIs/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {

  usersObservable!: Observable<UserInfoModel[]>;
  totalCount: number = 0;

  page!: number;
  pageSize!: number;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.setUsersObservable();
  }

  setUsersObservable(): void {
    this.usersObservable = this.activatedRoute.queryParams.pipe(
      switchMap(queryParams => {
        this.page = parseInt(queryParams['page'] ? queryParams['page'] : 0);
        return this.usersService.getUsers(this.page + 1)
      }),
      tap(res => {
        this.totalCount = res.total;
        this.pageSize = res.per_page;
      }),
      map(res => res.data)
    );
  }

  onPageChange(pageEvent: PageEvent): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: pageEvent.pageIndex,
        pageSize: pageEvent.pageSize
      }
    })
  }
}
