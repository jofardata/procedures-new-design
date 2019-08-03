import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResertPasswordService {

  
  constructor(private http: HttpClient) { }
  public Enregistrement(data){
    //retour de la requete
   return this.http.post<any>("https://operationsbackend.herokuapp.com/users/change-password/" +data.telephone,data,{observe:'response'});
  }
}
