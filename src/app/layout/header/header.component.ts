import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserInfoModel } from 'src/app/core/models/user.medel';
import { UsersService } from 'src/app/core/services/APIs/users.service';
import { LoaderService } from 'src/app/core/services/ui/loader.service';
import { ThemeService } from 'src/app/core/services/ui/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  searchUsersObservable!: Observable<UserInfoModel[]>;
  loadingBarObservable!: Observable<boolean>;
  searchUserForm = new FormControl('');
  loadingUser: boolean = false;

  constructor(
    private userService: UsersService,
    private loaderService: LoaderService,
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    this.loadingBarObservable = this.loaderService.loaderObservable;
    this.searchUsersObservable = this.searchUserForm.valueChanges.pipe(
      tap(res => this.loadingUser = true),
      switchMap(userId => this.userService.getUser(userId)),
      map(res => res ? [res] : null),
      tap(res => this.loadingUser = false)
    )
  }

  toggleMode(): void {
    this.themeService.toggleMode();
    this.cdr.markForCheck();
  }

  isDark(): boolean { return this.themeService.isDark }

}
