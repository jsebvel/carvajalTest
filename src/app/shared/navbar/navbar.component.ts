import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this._userService.signOut();
    this._router.navigate(['login']);
  }

  goEdit() {
    this._router.navigate(['cardEdition'])
  }

  goCreate() {
    this._router.navigate(['createCard']);
  }

}
