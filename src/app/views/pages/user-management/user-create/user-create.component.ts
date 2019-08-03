import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { GlobalService } from '../../services/global.service';
import {CreateUserService} from '../../services/create-user.service';

@Component({
  selector: 'kt-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
// declaration variable pour leurs utilisation
myForm: FormGroup;
bdnId:any;
name:any;
phone:any;
middleName:any;
lastName:any;
gender:any;
agentName :any;
profession:any[];
fiscalEntity:[];
sectors:[];
Roles:[];

responseCode :any;
creadtedBy:any;
sector : string;
sectorId : any;
sectorName : any;
entity : string;
entityId:any;
entityName : any;

constructor(private createUserService:CreateUserService,
  private globalService:GlobalService) { }

  ngOnInit() {
    this.myForm= new FormGroup({
      bdnId: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required),
      createdBy: new FormControl('',Validators.required),
      entity: new FormControl('',Validators.required),
      entityId: new FormControl('',Validators.required),
      agentName : new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      sectorId: new FormControl('',Validators.required),
      sectorName: new FormControl('',Validators.required),
      sector:new FormControl('',Validators.required),
      entityName:new FormControl('',Validators.required),
      roleId: new FormControl('',Validators.required),
      
  })
  this.getEntites();
  this.getRoles();
  this.getSector();
  }

  postSearch(myForm){
    this.createUserService.chargerRecherche(myForm.value.bdnId).subscribe(response=>{
      console.log(response);
      if(response.body.responseCode==='00'){
        this.bdnId = response.body.data.bdnId;
        this.agentName = response.body.data.middleName + ' ' + response.body.data.lastName;

        this.middleName = response.body.data.middleName;
        this.name = response.body.data.createdBy.name;
        this.lastName = response.body.data.lastName;
        
        this.phone = response.body.data.phone;
        this.responseCode = response.body.responseCode;
        
        
      }else{
        this.responseCode='01';
        this.bdnId ='';
      }      
    },err=>{
      console.log(err)
    })
  }

  // post(myForm){
  //   console.log(myForm.value)
  //   this.createUserService.Enregistrement(myForm.value).subscribe(response=>{
  //     if(response.body.responseCode==="00"){
  //       alert(response.body.responseMessage)
  //        this.ngOnInit();
  //     }else{
  //       alert(response.body.responseMessage)
  //     }
  //   })
  // }

  post(donnees){

    this.myForm = new FormGroup ({
      bdnId: new FormControl(this.bdnId,Validators.required),
      createdBy: new FormControl(localStorage.getItem('bdnId'), Validators.required),
      entityId: new FormControl(this.entityId, Validators.required),
      telephone	: new FormControl(donnees.value.telephone, Validators.required),
      roleId: new FormControl(donnees.value.roleId, Validators.required),
      agentName: new FormControl(this.agentName,Validators.required),
      sectorName: new FormControl(this.sectorName,Validators.required),
      sectorId: new FormControl(this.sectorId,Validators.required),
      entityName: new FormControl(this.entityName,Validators.required)
      
    });

    console.log(this.myForm.value);
    // alert(this.myForm.value.agentName);

    this.createUserService.Enregistrement(this.myForm.value).subscribe(response=>{
      if(response.body.responseCode === "00"){
        alert(response.body.responseMessage)
        this.ngOnInit();
      }else{
        alert(response.body.responseMessage)
      }
    })
  }

  //  liste des entites 
  // ==================
  getEntites(){
    this.createUserService.getAllEntites().subscribe(response=>{
      this.fiscalEntity = response.body.data;

      console.log(this.fiscalEntity) 
  })
  }

  //  liste de roles 
  // ==================
  getRoles(){
    this.createUserService.getAllRoless().subscribe(response=>{
      this.Roles = response.body.data;

      console.log(this.Roles)
  })
 }

//  liste de secteurs 
  // ==================
 getSector(){
  this.createUserService.getAllSector().subscribe(response=>{
    this.sectors = response.body.data;

    console.log(this.sectors)
})
}

  // SECTOR CHANGE
  // =============
  onSectorChange(event){
    this.sector = event;
    this.sectorId = this.sector.split(':')[0];
    this.sectorName = this.sector.split(':')[1];
  }

  //ENTITY CHANGE EVENT
  //===================
  onEntityChange(event){
    this.entity = event;
    this.entityId = this.entity.split(':')[0];
    this.entityName = this.entity.split(':')[1];
  }

}
