import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardingService {

  constructor(private http: HttpClient) { }

//fucntion qui recupere le lien du back-end airports
  public getAllBoarding(){
    return this.http.get<any>("https://kodinet.herokuapp.com/embarkements/find-all",{observe:'response'})
   }
   public getPagedData(page, size){
    return this.http.get<any>("https://kodinet.herokuapp.com/embarkements/pages?page="+page+"&size="+size,{observe:'response'}) 
   }
   public getPagedDataBetweenDates(page, size, date1, date2){
    return this.http.get<any>("https://kodinet.herokuapp.com/embarkements/pages/dates?page="
    +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
   }
}