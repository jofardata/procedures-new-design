// Angular
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// RxJS
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
// Translate
import { TranslateService } from '@ngx-translate/core';
// Store
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/reducers';
// Auth
import { AuthNoticeService, AuthService, Login } from '../../../../core/auth';
import { UserService } from '../../services/user.service';
import { GlobalService } from '../../services/global.service';

/**
 * ! Just example => Should be removed in development
 */


@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
	// Public params
	myForm: FormGroup;
	loading = false;
	isLoggedIn$: Observable<boolean>;
	errors: any = [];

	private unsubscribe: Subject<any>;

	private returnUrl: any;

	// Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	/**
	 * Component constructor
	 *
	 * @param router: Router
	 * @param auth: AuthService
	 * @param authNoticeService: AuthNoticeService
	 * @param translate: TranslateService
	 * @param store: Store<AppState>
	 * @param fb: FormBuilder
	 * @param cdr
	 * @param route
	 */
	constructor(
		private router: Router,
		private auth: AuthService,
		private authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private store: Store<AppState>,
		private fb: FormBuilder,
		private global:GlobalService,
		private cdr: ChangeDetectorRef,
		private userService:UserService,
		private route: ActivatedRoute
	) {
		this.unsubscribe = new Subject();
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.myForm = new FormGroup({
			bdnId: new FormControl('',Validators.required),
			password: new FormControl('', Validators.required)
		})

		// redirect back to the returnUrl before login
		this.route.queryParams.subscribe(params => {
			this.returnUrl = params['returnUrl'] || '/';
		});
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}


	post(myForm){
		this.loading=true;
		this.userService.login(myForm.value).subscribe(response=>{

		  console.log(response)
		  this.loading=false;
		  if(response.body.responseCode==="00"){
			localStorage.setItem('bdnId', response.body.data.bdnId);
			localStorage.setItem('entityId', response.body.data.entityId);
			localStorage.setItem('role', response.body.data.userRole.role);
			localStorage.setItem('roleId', response.body.data.userRole.id);
			localStorage.setItem('password', response.body.data.password);
			localStorage.setItem('createPar',response.body.data.createdBy);
			localStorage.setItem('loggedIn',"yes");
			if (response.body.data.hasChangedPassword === true) {
				this.global.showSuccess("Bienvenu..."+response.body.data.bdnId);
				this.router.navigate(['/']);

			}
			 else {
				this.loading=false;
				this.router.navigate(['/demo1/agent/reset-password'])
			 }
		  }else{
			this.loading=false;
			this.global.showError(response.body.responseMessage)
			// alert(response.body.responseMessage);
		  }
		},err=>{
			this.loading=false;
		})
	  }



}
