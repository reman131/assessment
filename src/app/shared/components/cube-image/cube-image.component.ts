import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube-image',
  templateUrl: './cube-image.component.html',
  styleUrls: ['./cube-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CubeImageComponent {

  @Input() imageUrl: string = '';

}


