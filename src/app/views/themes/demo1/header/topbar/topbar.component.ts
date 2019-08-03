// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

	constructor(private router:Router){

	}

	logout(){
localStorage.clear();
this.router.navigate(['/auth/login'])
	}
 }
