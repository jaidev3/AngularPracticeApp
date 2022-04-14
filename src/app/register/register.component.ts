import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  users: User[] = []; /////////////////use model instead of any
  usersEmail: String[] = [];
  user: any = {};
  constructor(private route:Router) {}

  ngOnInit(): void {}

  onSubmit(e: any) {
    e.preventDefault();
    // console.log(e);
    this.user.firstname = e.target[0].value;
    this.user.lastname = e.target[1].value;
    this.user.email = e.target[2].value;
    this.user.password = e.target[3].value;
    console.log(this.user);

    if (this.usersEmail.includes(e.target[2].value)||e.target[2].value=='') {
      this.user = {};
      return;
    } else {
      this.users.push(this.user);
      this.usersEmail.push(this.user.email);
      localStorage.setItem('usersEmail', JSON.stringify(this.usersEmail));
      localStorage.setItem('users', JSON.stringify(this.users));
      this.user = {};
    }

    console.log(this.users);
    console.log(this.usersEmail);
  
    // this.route.navigate(['login'])
  }
}
