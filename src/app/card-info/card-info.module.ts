import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardInfoRoutingModule } from './card-info-routing.module';
import { CardFormComponent } from './card-form/card-form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEditionComponent } from './card-edition/card-edition.component';
import { BasicCardComponent } from './basic-card/basic-card.component';


@NgModule({
  declarations: [
    CardFormComponent,
    CardEditionComponent,
    BasicCardComponent
  ],
  imports: [
    CommonModule,
    CardInfoRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-US'}
  ]
})
export class CardInfoModule { }
