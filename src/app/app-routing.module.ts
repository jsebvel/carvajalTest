import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoRoutingModule } from './card-info/card-info-routing.module';
import { UserInfoRoutingModule } from './user-info/user-info-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserInfoRoutingModule, CardInfoRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
