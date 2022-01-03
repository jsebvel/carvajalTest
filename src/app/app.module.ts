import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoModule } from './user-info/user-info.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CardInfoModule } from './card-info/card-info.module';
import { registerLocaleData } from '@angular/common';
import localePy from '@angular/common/locales/es-US';
import { AuthModule } from './auth/auth.module';
import { CardNumberPipe } from './card-number.pipe';
registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    UserInfoModule,
    HttpClientModule,
    CardInfoModule,
    AuthModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
