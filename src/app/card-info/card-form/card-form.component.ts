import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from 'src/app/services/card.service';
import { MessageService } from 'src/app/services/error-message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  cardForm: FormGroup;
  allUsers;
  constructor(
    private _messageService: MessageService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CardFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cardService: CardService,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
  }


}
