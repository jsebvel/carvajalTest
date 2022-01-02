import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userList;
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUSers();
  }

  getAllUSers() {
    this._userService.getAllUsers().subscribe(users => {
      this.userList = users;
      console.log(this.userList);
    })
  }

}
