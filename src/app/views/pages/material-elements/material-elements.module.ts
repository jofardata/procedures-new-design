import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
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
  ],
  exports:[MatInputModule,
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
    MatSortModule,]
})
export class MaterialElementsModule { }
