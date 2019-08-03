import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreightService {

  constructor(private http: HttpClient) { }

//fucntion qui recupere tous ce qui a dans freight du back-end airports
  public getAllFreight(){
    return this.http.get<any>("https://kodinet.herokuapp.com/freights/find-all",{observe:'response'})
   }

  //  function of pagination with angular
   public getPagedData(page, size){
    return this.http.get<any>("https://kodinet.herokuapp.com/freights/pages?page="+page+"&size="+size,{observe:'response'}) 
   }

  // fonction de recuperation des freight avec pagination 
   public getPagedDataBetweenDates(page, size, date1, date2){
    return this.http.get<any>("https://kodinet.herokuapp.com/freights/pages/dates?page="
    +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
   }
}
