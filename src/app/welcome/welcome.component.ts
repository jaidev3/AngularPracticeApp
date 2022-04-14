import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private loginserv:LoginService) {}
  firstname: any = '';
  ngOnInit(): void {
    this.firstname=this.loginserv.username
  }

}
