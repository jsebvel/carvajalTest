import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule

  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatInputModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogActions,
    MatDialogContent,
    MatRadioModule,
    MatExpansionModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
})
export class AngularMaterialModule { }
