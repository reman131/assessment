import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ImageLoadingDirective } from './directives/image-loading.directive';
import { NavigateBackDirective } from './directives/navigate-back.directive';
import { UserCardComponent } from './components/user-card/user-card.component';
import { CubeImageComponent } from './components/cube-image/cube-image.component';



@NgModule({
  declarations: [
    ImageLoadingDirective,
    NavigateBackDirective,
    UserCardComponent,
    CubeImageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    ImageLoadingDirective,
    NavigateBackDirective,
    UserCardComponent,
    CubeImageComponent
  ]
})
export class SharedModule { }
