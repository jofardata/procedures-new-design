import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GopassService {
gopass:any[];
constructor(private http: HttpClient) { }

// function recuperation de tous les gopasses
public getAllGopass(){
  return this.http.get<any>("https://kodinet.herokuapp.com/gopasses/find-all",{observe:'response'})
 }

 // fucntion of  pagination 
 public getPagedData(page, size){
  return this.http.get<any>("https://kodinet.herokuapp.com/gopasses/pages?page="+page+"&size="+size,{observe:'response'}) 
 }

//  function of recuperation des vignettes avec pagination 
 public getPagedDataBetweenDates(page, size, date1, date2){
  return this.http.get<any>("https://kodinet.herokuapp.com/gopasses/pages/dates?page="
  +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
 }
}

