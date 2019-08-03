import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivingLicenseListComponent } from './driving-license-list/driving-license-list.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MaterialElementsModule } from '../material-elements/material-elements.module';

const routes=[{
  path:'',
  component:DrivingLicenseListComponent
}]
@NgModule({
  declarations: [DrivingLicenseListComponent],
  imports: [
    MaterialElementsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DrivingLicenseModule { }
