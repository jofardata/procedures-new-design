import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../services/api-response';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient ) { }


  getAllStats(){
    return this.http.get<ApiResponse>("https://kodinet.herokuapp.com/stats/findAll", {observe:'response'})
  }
}
