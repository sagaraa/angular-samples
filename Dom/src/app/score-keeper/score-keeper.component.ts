import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-score-keeper',
  templateUrl: './score-keeper.component.html',
  styleUrls: ['./score-keeper.component.css']
})
export class ScoreKeeperComponent implements OnInit {
  private player1Score:number;
  private player2Score:number;
  max:number=5;
  private gameOver;
  // @Input() private maxScore;
  constructor(@Inject(DOCUMENT) document) {
    this.player1Score=0;
    this.player2Score=0;
    // this.max=5;
    this.gameOver=false;
   }
  //  setMax(){
  //    this.max=this.maxScore;
  //  }
   playerOne(){
    if(!this.gameOver){
      this.player1Score++;
      if(this.player1Score===this.max) {
        this.gameOver=!this.gameOver;
        document.querySelector("#p1").classList.add("winner");
      }
    }
   }
   playerTwo(){
    if(!this.gameOver){
      this.player2Score++;
      if(this.player2Score===this.max) {
        this.gameOver=!this.gameOver;
        document.querySelector("#p2").classList.add("winner")
      }
    }
   }
   reset(){
    this.player1Score=0;
    this.player2Score=0;
    this.gameOver=false;
    document.querySelector("#p1").classList.remove("winner");
    document.querySelector("#p2").classList.remove("winner");
    this.max=5;
   }

  ngOnInit() {
  }

}
