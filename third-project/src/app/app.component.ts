import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  I need TestService I'll create construtor with arument


  constructor(private svc: TestService, private http: HttpClient ){
      svc.printToConsole("Got the service");
  }
j
  ngOnInit(){
    // let obs = this.http.get('https://api.github.com/users/koushikkothagal')
    // obs.subscribe( (response) => console.log(response) )
  }
}
