import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { MessageService } from 'src/app/services/error-message.service';

@Component({
  selector: 'app-card-edition',
  templateUrl: './card-edition.component.html',
  styleUrls: ['./card-edition.component.scss']
})
export class CardEditionComponent implements OnInit {
  userWithCards;
  cardForm: FormGroup;
  userBasicInfo;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _cardService: CardService,
    private _messageService: MessageService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userWithCards = this._cardService.getUserWithCards();
     if(this.userWithCards) {
       this.buildUserBasicInfo();
     }
  }

  buildUserBasicInfo() {
    this.userBasicInfo = {
      name: `${this.userWithCards.name} ${this.userWithCards.surname}`,
      userId: this.userWithCards.userId,
      document: this.userWithCards.document
    }
  }

}
