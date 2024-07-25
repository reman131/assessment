import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserInfoModel } from 'src/app/core/models/user.medel';
import { UsersService } from 'src/app/core/services/APIs/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {

  userInfoObservable!: Observable<UserInfoModel>;
  suggestedTutorsObservable!: Observable<UserInfoModel[]>;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.setUserInfoObservable();
  }

  setUserInfoObservable(): void {
    this.userInfoObservable = this.activatedRoute.params
      .pipe(
        map(pathParams => {
          if (!pathParams['id']) this.router.navigate(['./']);
          return parseInt(pathParams['id']);
        }),
        switchMap(userId => this.usersService.getUser(userId)),
      );
  }
}
