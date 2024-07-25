import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
