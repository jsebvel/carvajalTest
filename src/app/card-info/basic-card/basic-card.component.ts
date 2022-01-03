import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { MessageService } from 'src/app/services/error-message.service';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent implements OnInit {
  @Input() card;
  @Input() userId: number;
  @Input() title:string;
  @Input() dialogRef;
  cardForm: FormGroup
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _cardService: CardService,
    private _messageService: MessageService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.card) {
      this.loadCardData();
    }
  }

  createForm() {
    this.cardForm = this._formBuilder.group({
      cardNumber: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      expirationDate: ['', Validators.compose([Validators.required])],
      cv: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(3)])],
    })
  }

  getError(formControlName, fieldName) {
    return this._messageService.getFieldsError(this.cardForm, formControlName, fieldName)
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  updateCard(): any {
    let cardData;
    if (this.cardForm.valid) {
      cardData = {
        ...this.cardForm.getRawValue(),
        cardId: this.card.cardId,
        userId: this.userId,
        createAt: this.card.createAt,
        updateAt: new Date

      }

      this._cardService.updateCard(cardData).subscribe(
        {
          next: this.handleAddSuccess.bind(this),
          error: this.handleAddError.bind(this)
        }
      );
    } else {
      this._messageService.getErrorForm();
    }
  }

  saveCard() : any {
    if (this.cardForm.valid) {
      this._cardService.createCard(this.cardForm.getRawValue()).subscribe(
        {
          next: this.handleAddSuccess.bind(this),
          error: this.handleAddError.bind(this)
        }
      );
    } else {
      this._messageService.getErrorForm();
    }
  }

  deleteCard() {
    this._cardService.deleteCard(this.card.cardId).subscribe(
      {
        next: this.handleDeleteSuccess.bind(this),
        error: this.handleAddError.bind(this)
      }
    );
  }

  handleAddSuccess() {
    this._messageService.addCardSuccess();
  }
  handleAddError() {
    this._messageService.addCardError();
  }

  handleDeleteSuccess() {
    this._messageService.deleteCardSuccess();
  }

  loadCardData() {
    this.cardForm.get('cardNumber').disable();
    this.cardForm.patchValue(this.card);
  }
}
