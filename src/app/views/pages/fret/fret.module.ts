import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreightComponent } from './frets/frets.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MaterialElementsModule } from '../material-elements/material-elements.module';
const routes=[
  {
    path:'',
    component:FreightComponent
  }
]
@NgModule({
  declarations: [FreightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialElementsModule
  ]
})
export class FretModule { }
