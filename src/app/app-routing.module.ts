import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { PersonalInformationComponent } from './auth/personal-information/personal-information.component';
import { CardInfoRoutingModule } from './card-info/card-info-routing.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserInfoRoutingModule } from './user-info/user-info-routing.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    UserInfoRoutingModule,
    CardInfoRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
