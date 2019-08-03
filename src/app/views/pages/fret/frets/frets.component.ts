import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FreightService } from '../../services/freight.service';
import { FormGroup } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ExcelService } from '../../services/excel.service';
export class ChipsOverviewExample {}
@Component({
  selector: 'app-freight',
  templateUrl: './frets.component.html',
  styleUrls: ['./frets.component.scss']
})
export class FreightComponent implements OnInit {
freights: any[];
myForm: FormGroup;
excel = [];
size;
page;
date1;
date2;
minDate;
maxDate;

@ViewChild('dataTable') table;
  @ViewChild (MatSort)matSort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  constructor(private freightService:FreightService, private excelService:ExcelService) { 

  }
  displayedColumns: string[] = ['createdOn', 'passengerName', 'destination', 'weight','amount'];
  dataSource;
  totalElements;


  ngOnInit() {
    this.myForm= new FormGroup({})
    // this.getData();
    this.page = 0;
    this.size = 5;
    this.getAllData();
}

getAllData(){
  this.freightService.getPagedData(this.page, this.size).subscribe(response=>{
    console.log(response)
    this.freights = response.body.data.content;
    this.totalElements = response.body.data.totalElements;
    this.dataSource = new MatTableDataSource(response.body.data.content);
    this.dataSource.paginator = this.paginator;
    console.log(response.body.data.content)
})
}
regenerer():void{  
  this.excelService.exportAsExcelFile(this.freights, 'Rapport fret en Fichier excel');  
} 

applyFilter(filterValue){
  filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}

onPageChanged(e){
  this.freightService.getPagedData(e.pageIndex, 5).subscribe(response=>{
    console.log(response)
    this.freights = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.freights)
});

}

onRefresh(){
  this.freightService.getPagedData(0, 5).subscribe(response=>{
    console.log(response)
    this.freights = response.body.data;
    this.dataSource = new MatTableDataSource(response.body.data.content);
   
    console.log(this.freights)
});
}

onDate1(e){
  this.minDate =e.target.value;
    this.date1 =new Date(e.target.value).getTime();
}

onDate2(e){
  this.maxDate =e.target.value;
    this.date2 =new Date(e.target.value).getTime();
    this.freightService.getPagedDataBetweenDates(0, 5, new Date(this.date1).getTime(),new Date(this.date2).getTime()).subscribe(response=>{
      console.log(response)
      this.freightService = response.body.data;
      this.dataSource = new MatTableDataSource(response.body.data.content);
      this.totalElements = response.body.data.totalElements;
      console.log(this.freights)
  });
}

// getData(){
//   this.freightService.getAllFreight().subscribe(response=>{
//     this.freights = response.body.data;

//     console.log(this.freights)
// })
// }
}