import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VignetteService {

  constructor(private http: HttpClient) { }

  // function of recuperation de toutes les vignettes 
  public getAllVignette(){
    return this.http.get<any>("https://kodinet.herokuapp.com/vignettes/findAll",{observe:'response'})
   }

  // fucntion of  pagination 
   public getPagedData(page, size){
    return this.http.get<any>("https://kodinet.herokuapp.com/vignettes/pages?page="+page+"&size="+size,{observe:'response'}) 
   }

  //  function of recuperation des vignettes avec pagination 
   public getPagedDataBetweenDates(page, size, date1, date2){
    return this.http.get<any>("https://kodinet.herokuapp.com/vignettes/pages/dates?page="
    +page+"&size="+size+"&date1="+date1+"&date2="+date2,{observe:'response'}) 
   }

  }