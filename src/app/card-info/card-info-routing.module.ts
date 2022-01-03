import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveGuard } from '../guardians/can-active.guard';
import { CardEditionComponent } from './card-edition/card-edition.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  {
    path: 'cardEdition', component: CardEditionComponent, canActivate: [CanActiveGuard]
  },
  {
    path: 'createCard', component: CreateCardComponent, canActivate: [CanActiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardInfoRoutingModule { }
