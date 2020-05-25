import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { trigger, state, transition, style, animate } from '@angular/animations'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(@Inject(DOCUMENT) document) {
    
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset >200) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }

}
