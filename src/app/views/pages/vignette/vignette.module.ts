import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VignetteComponent } from './vignette-list/vignette-list.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatSortModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MaterialElementsModule } from '../material-elements/material-elements.module';
const routes=[
  {
    path:'',
    component:VignetteComponent
  }
]
@NgModule({
  declarations: [VignetteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialElementsModule
  ]
})
export class VignetteModule { }
