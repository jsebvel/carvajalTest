import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token;
  constructor(private _userService: UserService) {
  }
  title = 'carvajalTest';

  ngOnInit(): void {
    this.token = this._userService.getToken();

  }
  onInit
}
