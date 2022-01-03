import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PersonalInformationComponent } from '../auth/personal-information/personal-information.component';

const routes: Routes = [
  {
    path: 'personalInformation', component: PersonalInformationComponent,

  },
  {
    path: 'editUser', component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInfoRoutingModule { }
