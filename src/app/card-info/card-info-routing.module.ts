import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEditionComponent } from './card-edition/card-edition.component';

const routes: Routes = [
  {
    path: 'cardEdition', component: CardEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardInfoRoutingModule { }
