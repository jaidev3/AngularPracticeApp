import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userData: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.userData = res;
        console.log(this.userData);
      });
  }

  createPost(eve: HTMLInputElement) {
    let post = { title: eve.value };
    console.log(eve.value);
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', post)
      .subscribe((response: any) => {
        this.userData.splice(0, 0, post);
        console.log(response);
      });
  }

  editPost(user: any) {
    let postUpdate = { title: 'updated answer' };
    this.http
      .patch(
        'https://jsonplaceholder.typicode.com/posts' + '/' + user.id,
        postUpdate
      )
      .subscribe((response: any) => {
        this.userData.splice(user.id - 1, 1, postUpdate);
        console.log(response);
      });
  }
  deletPost(user: any) {
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts' + '/' + user.id)
      .subscribe((response: any) => {
        this.userData.splice(user.id, 1);
        console.log(response);
      });
  }
}
