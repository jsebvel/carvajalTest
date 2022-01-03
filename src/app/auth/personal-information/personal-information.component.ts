import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardFormComponent } from 'src/app/card-info/card-form/card-form.component';
import { CardService } from 'src/app/services/card.service';
import { MessageService } from 'src/app/services/error-message.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  userExists: boolean;
  personalInformationForm: FormGroup = new FormGroup({});
  emailPattern = '[ÑA-Zña-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})';
  constructor(
    private _personalInfBuilder: FormBuilder,
    private _messageService: MessageService,
    private _userService: UserService,
    public cardDialog: MatDialog,
    private _router: Router,
    private _cardService: CardService
  ) { }



  ngOnInit(): void {
    this.createPersonalForm();
  }

  createPersonalForm() {
    this.personalInformationForm = this._personalInfBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(120)])],
      surname: ['', Validators.compose([Validators.required, Validators.maxLength(120)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(120), Validators.pattern(this.emailPattern)])],
      cellphone: ['', Validators.compose([Validators.required, Validators.maxLength(120)])],
      document: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    });

  }


  getError(formControlName, fieldName) {
    return this._messageService.getFieldsError(this.personalInformationForm, formControlName, fieldName)
  }

  createUser() {
    if (this.personalInformationForm.valid) {
      this._userService.createUser(this.personalInformationForm.getRawValue()).subscribe(
        {
          next: this.handleCreateResponse.bind(this),
          error: this.handleCreateError.bind(this)
        }
      )
    } else {
      this._messageService.getErrorForm();
    }
  }


  handleCreateResponse(response) {
    this._messageService.getNewAddMessage();
  }

  handleCreateError(response) {
    this._messageService.getCreateUserError();

  }

  openDialog() : void {
    const dialogRef = this.cardDialog.open(CardFormComponent, {
      width: '450px',
      data: {
        userId: localStorage.getItem('userEmail')
      }
    });
    dialogRef.afterClosed().subscribe(data => {

      //this._router.navigate(['editUser'])
    })
  }

  // editCards() {
  //   this._cardService.setUserWithCards(this.userListed);
  //   this._router.navigate(['cardEdition'])
  // }

}
