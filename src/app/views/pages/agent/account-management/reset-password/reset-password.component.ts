// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResertPasswordService } from '../../../services/resert-password.service';
@Component({
  selector: 'kt-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit {
  myForm: FormGroup;
  // bdnId:any[];
  // telephone: any[];
  // oldPassword:[];
  // newPassword:[];
  // confirmPassword:[];
  id = localStorage.getItem("bdnId");
  role = localStorage.getItem("role");
  constructor(private resertService:ResertPasswordService,  
    private router:Router) { }

  ngOnInit() {
    this.myForm= new FormGroup({
      bdnId: new FormControl('',Validators.required),
      // role: new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      oldPassword: new FormControl('',Validators.required),
      newPassword: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required),
      
  });
  this.myForm.patchValue({
    bdnId:this.id
  })
  }
  post(myForm){
    this.resertService.Enregistrement(myForm.value).subscribe(response=>{
      alert(response.body.responseMessage);
      if(response.body.responseCode==="00"){
        alert(response.body.responseMessage)
        this.router.navigate(['/']);
      }else{
        alert(response.body.responseMessage)
      }
    })
  }
}

