import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  username: any = '';
  userList: any;
  email: any;
  password: any;
  constructor() {}

  userCheck(e: any) {
    this.email = e.target[0].value;
    this.password = e.target[1].value;
    this.userList = localStorage.getItem('users');
    this.userList = JSON.parse(this.userList);
    console.log('user:', this.userList);

    for (let i = 0; i < this.userList.length; i++) {
      if (
        e.target[0].value == this.userList[i].email &&
        e.target[1].value == this.userList[i].password
      ) {
        this.username = e.target[0].value;
        return e.target[0].value;
      }
    }
  }
}
