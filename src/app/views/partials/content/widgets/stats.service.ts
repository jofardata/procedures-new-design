import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }


  getAllStats(){
    return this.http.get<any>("https://kodinet.herokuapp.com/stats/findAll", {observe:'response'})
  }
}
