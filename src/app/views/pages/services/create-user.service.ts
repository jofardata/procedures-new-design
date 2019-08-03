import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) { }

  public chargerRecherche(data){
    //retour de la requete
   return this.http.get<any>("https://kodinet.herokuapp.com/persons/read-by-input/"+data,{observe:'response'});
  }

  // recuperer toutes les entites
  public getAllEntites(){
    //retour de la requete
    return this.http.get<any>("https://proceduresfiscales.herokuapp.com/fiscalentity/find-all",{observe:'response'});
  }

// recuperation de secteur
  public getAllSector(){
    //retour de la requete
    return this.http.get<any>("https://proceduresfiscales.herokuapp.com/sector/find-all",{observe:'response'});
  }

  // recuperer tous les roles
  public getAllRoless(){
    //retour de la requete
    return this.http.get<any>("https://operationsbackend.herokuapp.com/user-role/read-all",{observe:'response'});
  }

  //creation user
  public Enregistrement(data){
    //retour de la requete
   return this.http.post<any>("https://operationsbackend.herokuapp.com/users/insert/" +data.roleId+"/"+data.telephone,data,{observe:'response'});
  }
  
}
