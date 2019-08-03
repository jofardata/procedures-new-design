
import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardingService } from '../../services/boarding.service';
import { FormGroup } from '@angular/forms';
import { ExcelService } from '../../services/excel.service';
import { Observable } from 'rxjs'; 
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding-list.component.html',
  styleUrls: ['./boarding-list.component.scss']
})
export class BoardingComponent implements OnInit {
  boarding: any[];
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

  displayedColumns: string[] = ['createdOn', 'passengerName', 'flightCompany', 'destination','amount','currency'];
  dataSource;
  totalElements;
  constructor( private excelService:ExcelService,
    private BoardingService:BoardingService, private http:HttpClient) { }

  ngOnInit() {
    this.page = 0;
    this.size = 5;
    this.getData();
  }

  getData(){
    this.BoardingService.getPagedData(this.page, this.size).subscribe(response=>{
      console.log(response)
      this.boarding = response.body.data.content;
      this.totalElements = response.body.data.totalElements;
      this.dataSource = new MatTableDataSource(response.body.data.content);
      this.dataSource.paginator = this.paginator;
      console.log(response.body.data.content)

      console.log(this.boarding)
  })
}
  regenerer():void{  
    this.excelService.exportAsExcelFile(this.boarding, 'Rapport des embarquemet en Fichier excel');  
  }
  
  applyFilter(filterValue){
    filterValue = filterValue.trim(); 
      filterValue = filterValue.toLowerCase(); 
      this.dataSource.filter = filterValue;
  }
  onPageChanged(e){
    this.BoardingService.getPagedData(e.pageIndex, 5).subscribe(response=>{
      console.log(response)
      this.boarding = response.body.data;
      this.dataSource = new MatTableDataSource(response.body.data.content);
     
      console.log(this.boarding)
  });
  
  }
  onRefresh(){
    this.BoardingService.getPagedData(0, 5).subscribe(response=>{
      console.log(response)
      this.boarding = response.body.data;
      this.dataSource = new MatTableDataSource(response.body.data.content);
     
      console.log(this.boarding)
  });
  }
  onDate1(e){
    this.minDate =e.target.value;
      this.date1 =new Date(e.target.value).getTime();
  }
  
  onDate2(e){
    this.maxDate =e.target.value;
      this.date2 =new Date(e.target.value).getTime();
      this.BoardingService.getPagedDataBetweenDates(0, 5, new Date(this.date1).getTime(),new Date(this.date2).getTime()).subscribe(response=>{
        console.log(response)
        this.boarding = response.body.data;
        this.dataSource = new MatTableDataSource(response.body.data.content);
        this.totalElements = response.body.data.totalElements;
        console.log(this.boarding)
    });
  }

}
