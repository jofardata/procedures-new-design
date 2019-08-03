import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GopassService } from '../../services/gopass.service';
import { FormGroup } from '@angular/forms';
import {ExcelService} from '../../services/excel.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-gopass',
  templateUrl: './gopass-list.component.html',
  styleUrls: ['./gopass-list.component.scss']
})
export class GopassComponent implements OnInit {
gopasses:any[];
myForm: FormGroup;
excel = [];
size;
page;
date1;
date2;
minDate;
maxDate;

@ViewChild('dataTable') table;
  @ViewChild (MatSort) matSort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  constructor(private gopassService:GopassService,
  private excelService : ExcelService) { 

  }
  displayedColumns: string[] = ['createdOn','destination', 'genre','amount','currency','flightNumber','passengerName'];
  dataSource;
  totalElements;

  ngOnInit() {
    this.myForm = new FormGroup({})
    // this.getData();
    this.page = 0;
    this.size = 5;
    this.getAllData();
  }

  getAllData(){
  this.gopassService.getPagedData(this.page, this.size).subscribe(response=>{
    console.log(response)
    this.gopasses = response.body.data.content;
    this.totalElements = response.body.data.totalElements;
    this.dataSource = new MatTableDataSource(response.body.data.content);
    this.dataSource.paginator = this.paginator;
    console.log(response.body.data.content)
})
}

regenerer():void{  
  this.excelService.exportAsExcelFile(this.gopasses, 'Rapport Gopasse en Fichier excel');  
} 

applyFilter(filterValue){
  filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

onPageChanged(e){
  this.gopassService.getPagedData(e.pageIndex, 5).subscribe(response=>{
    console.log(response)
    this.gopasses = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.gopasses)
});

}

onRefresh(){
  this.gopassService.getPagedData(0, 5).subscribe(response=>{
    console.log(response)
    this.gopasses = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.gopasses)
});
}

onDate1(e){
  this.minDate =e.target.value;
    this.date1 =new Date(e.target.value).getTime();
}

onDate2(e){
  this.maxDate =e.target.value;
    this.date2 =new Date(e.target.value).getTime();
    this.gopassService.getPagedDataBetweenDates(0, 5, new Date(this.date1).getTime(),new Date(this.date2).getTime()).subscribe(response=>{
      console.log(response)
      this.gopassService = response.body.data;
      this.dataSource = new MatTableDataSource(response.body.data.content);
      this.totalElements = response.body.data.totalElements;
      console.log(this.gopasses)
  });
}

  
  // getData(){
  //   this.gopassService.getAllGopass().subscribe(response=>{
  //     this.gopasses = response.body.data;

  //     console.log(this.gopasses)
  // })
  // }

}
