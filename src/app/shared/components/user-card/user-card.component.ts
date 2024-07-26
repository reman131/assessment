import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { UserInfoModel } from 'src/app/core/models/user.medel';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {

  rotateYDeg: number = 0;
  rotateXDeg: number = 0;
  dimantionChange: number = 0;
  rotataionSubscription: Subscription;

  @Input() userInfo!: UserInfoModel;

  constructor(private cdr: ChangeDetectorRef) {
    this.rotataionSubscription = timer(600, 6000).subscribe(res => {
      // Set Random angles for rotation axes
      this.rotateXDeg += Math.floor(Math.sign((Math.random() - 0.5 - this.rotateXDeg / 3600)) * 90);
      this.rotateYDeg += Math.floor(Math.sign((Math.random() - 0.5 - this.rotateXDeg / 3600)) * 90);
      // Set random dimension for cube plates
      this.dimantionChange = Math.floor(30 + Math.random() * 50);
      // Since component input has not changed
      // and we use OnPush detection strategy,
      // we need to mark it for check
      this.cdr.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this.rotataionSubscription.unsubscribe();
  }

}
