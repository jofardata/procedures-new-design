import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs'; 
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { DrivingLicenseService } from '../../services/driving-license.service';
import { ExcelService } from '../../services/excel.service';
@Component({
  selector: 'kt-driving-license-list',
  templateUrl: './driving-license-list.component.html',
  styleUrls: ['./driving-license-list.component.scss']
})
export class DrivingLicenseListComponent implements OnInit {

  myForm:FormGroup;
  drivinglicenses: any[];
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

  displayedColumns: string[] = ['createdOn', 'name', 'category', 'phone','status','town'];
  dataSource;
  totalElements;
  constructor(private excelService:ExcelService,
    private DrivingService: DrivingLicenseService, private http:HttpClient) { 
  }

  ngOnInit() {
    this.page = 0;
    this.size = 5;
    this.getData();
  
  }

  getData(){
    this.DrivingService.getPagedData(this.page, this.size).subscribe(response=>{
      console.log("CALLING DATA")
      console.log(response)
      this.drivinglicenses = response.body.data.content;
      this.totalElements = response.body.data.totalElements;
      this.dataSource = new MatTableDataSource(response.body.data.content);
      this.dataSource.paginator = this.paginator;
      console.log(response.body.data.content)
  })
}
regenerer():void{  
  this.excelService.exportAsExcelFile(this.drivinglicenses, 'Rapport en Fichier excel');  
} 

applyFilter(filterValue){
  filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

onPageChanged(e){
  this.DrivingService.getPagedData(e.pageIndex, e.pageSize).subscribe(response=>{
    console.log(response)
    this.drivinglicenses = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
    this.totalElements = response.body.data.totalElements;
    console.log(this.drivinglicenses)
});

}

onRefresh(){
  this.DrivingService.getPagedData(0, 5).subscribe(response=>{
    console.log(response)
    this.drivinglicenses = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.drivinglicenses)
});
}

onDate1(e){
  this.minDate =e.target.value;
    this.date1 =new Date(e.target.value).getTime();
}

onDate2(e){
  this.maxDate =e.target.value;
    this.date2 =new Date(e.target.value).getTime();
    this.DrivingService.getPagedDataBetweenDates(0, 5, new Date(this.date1).getTime(),new Date(this.date2).getTime()).subscribe(response=>{
      console.log(response)
      this.drivinglicenses = response.body.data;
      this.dataSource = new MatTableDataSource(response.body.data.content);
      this.totalElements = response.body.data.totalElements;
      console.log(this.drivinglicenses)
  });
}
}
