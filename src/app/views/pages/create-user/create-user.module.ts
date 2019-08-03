import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAllUserComponent } from './create-all-user/create-all-user.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
const routes=[{
  path:'',
  component:CreateAllUserComponent
}]

@NgModule({
  declarations: [CreateAllUserComponent],
  imports: [
    CommonModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatTableModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class CreateUserModule { }
