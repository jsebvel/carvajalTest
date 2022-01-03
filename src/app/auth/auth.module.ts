import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    PersonalInformationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
