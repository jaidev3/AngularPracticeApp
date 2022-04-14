import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  result: any='';
  constructor(private loginserv: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(e: any) {
    e.preventDefault();
    this.result = this.loginserv.userCheck(e) 
    if(this.loginserv.userCheck(e) !==''){
      this.router.navigate(['admin']);
    }
    
  }
}

////  map foreach not working
