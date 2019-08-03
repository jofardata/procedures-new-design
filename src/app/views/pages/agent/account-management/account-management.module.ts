import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
const routes=[{
  path:'',
  component:ResetPasswordComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
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
export class AccountManagementModule { }
