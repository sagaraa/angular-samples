import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User;
  inputText: string = 'Initial value';
  
  constructor(){
    this.user = new User();
    this.user.name = "sagar arora";
    this.user.address = "my Address";
    this.user.title = "Software Engineer";
    this.user.phone = [
      '87683278274',
      '87327878832'
    ]

  }
  
}
