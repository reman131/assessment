import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatMenuModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [],

  exports: [
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatOptionModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
})
export class MaterialModule {

}
