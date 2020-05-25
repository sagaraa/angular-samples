import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {
  isPnik:boolean = false;
  constructor(@Inject(DOCUMENT) document) { }
  sagar(){
    // document.body.classList.toggle("random");
    if(this.isPnik){
      document.body.style.backgroundColor="white";
    }else{
      document.body.style.backgroundColor="pink";
    }
    this.isPnik=!this.isPnik;
  }
  ngOnInit() {
  }

}
