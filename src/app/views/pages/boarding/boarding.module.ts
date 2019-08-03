import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingComponent } from './boarding-list/boarding-list.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MaterialElementsModule } from '../material-elements/material-elements.module';
const routes=[{
  path:'',
  component:BoardingComponent
}]
@NgModule({
  declarations: [BoardingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialElementsModule
  ]
})
export class BoardingModule { }
