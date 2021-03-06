import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInformationComponent } from '../auth/personal-information/personal-information.component';
import { AngularMaterialModule } from '../angular-material.module';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    AngularMaterialModule,
  ]
})
export class UserInfoModule { }
