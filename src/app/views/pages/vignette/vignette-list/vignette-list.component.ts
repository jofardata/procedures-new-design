import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VignetteService } from '../../services/vignette.service';
import { FormGroup } from '@angular/forms';
import {ExcelService} from '../../services/excel.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-vignette',
  templateUrl: './vignette-list.component.html',
  styleUrls: ['./vignette-list.component.scss']
})
export class VignetteComponent implements OnInit {
  vignettes: any[];
  myForm: FormGroup;
  excel = [];
  page;
  size;
  date1;
  date2;
  minDate;
  maxDate;
  @ViewChild('dataTable') table;
  @ViewChild (MatSort)matSort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;

  constructor(private vignetteService:VignetteService,
    private excelService : ExcelService) { 

  }
  displayedColumns: string[] = ['createdOn', 'expiresOn', 'category','amount','make','chassis','number','owner'];
  dataSource;
  totalElements;

   ngOnInit() {
    this.myForm= new FormGroup({})
    //  this.getData();
    this.page = 0;
    this.size = 5;
    this.getAllData();
}


getAllData(){
  this.vignetteService.getPagedData(this.page, this.size).subscribe(response=>{
    console.log(response)
    this.vignettes = response.body.data.content;
    this.totalElements = response.body.data.totalElements;
    this.dataSource = new MatTableDataSource(response.body.data.content);
    this.dataSource.paginator = this.paginator;
    console.log(response.body.data.content)
})
}

regenerer():void{  
  this.excelService.exportAsExcelFile(this.vignettes, 'Rapport en Fichier excel');  
} 

applyFilter(filterValue){
  filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

onPageChanged(e){
  this.vignetteService.getPagedData(e.pageIndex, 5).subscribe(response=>{
    console.log(response)
    this.vignettes = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.vignettes)
});

}

onRefresh(){
  this.vignetteService.getPagedData(0, 5).subscribe(response=>{
    console.log(response)
    this.vignettes = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.vignettes)
});
}

onDate1(e){
  this.minDate =e.target.value;
    this.date1 =new Date(e.target.value).getTime();
}

onDate2(e){
  this.maxDate =e.target.value;
    this.date2 =new Date(e.target.value).getTime();
    this.vignetteService.getPagedDataBetweenDates(0, 5, new Date(this.date1).getTime(),new Date(this.date2).getTime()).subscribe(response=>{
      console.log(response)
      this.vignetteService = response.body.data;
      this.dataSource = new MatTableDataSource(response.body.data.content);
      this.totalElements = response.body.data.totalElements;
      console.log(this.vignettes)
  });
}

// getData(){
//   this.vignetteService.getAllVignette().subscribe(response=>{
//     this.vignettes = response.body.data;
//     console.log(this.vignettes)
// })
// }
}

