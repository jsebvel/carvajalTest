import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/error-message.service';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  emailPattern = '[ÑA-Zña-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})';
  isLoading;
  loginSubscription: Subscription;
  userId;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _userService: UserService,
    private _messageService: MessageService,


  ) { }

  ngOnInit(): void {
    this.verifyLogin();
    this.initializeLoginForm();

  }

  initializeLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])]
    });
  }

  ngOnDestroy() {

  }

  getError(formControlName, fieldName) {
    return this._messageService.getFieldsError(this.loginForm, formControlName, fieldName)
  }


  login() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.getRawValue();
      this._userService.login(userData).subscribe(
        {
          next: this.handleLogin.bind(this),
          error: this.handleErrorLogin.bind(this)
        }
      )
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  handleLogin(response) {
    const token: any = this.decodeToken(response.jwt);
    console.log(token);
    localStorage.setItem('userEmail', token.sub);
    localStorage.setItem('token', response.jwt);
    this._messageService.loginSuccess();;

  }
  handleErrorLogin(response) {
    console.log(response);

  }

  decodeToken(token) {
    try {
      return jwt_decode(token)
    } catch (error) {

    }
  }

  verifyLogin() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['createCard']);
    }
  }


}
