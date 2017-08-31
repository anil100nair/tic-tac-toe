import { Component } from '@angular/core';

import { Score } from './model/score.model';
import { ScoreService } from './services/score.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers: [ ScoreService ]
})
export class AppComponent  {
  
  squares = Array(9);
  currentPlayer: string = 'X';
  winner: string = null;
  currentMove: number = 0;
  noOfPlayers: number = 1;
  oComp: boolean = true;
  xPlayer: string = "Player";
  oPlayer: string = "Computer";
  xScore : Score = { name: null, wins: 0, loss: 0, draw: 0 };
  oScore : Score = { name: null, wins: 0, loss: 0, draw: 0 };
  xId: string;
  oId: string;
  highScores: any;
  
  constructor(public scoreService: ScoreService) {
    // console.log('Score Service Initiated.')
    this.scoreService.getScores()
        .subscribe(
          scores => {
            this.highScores = scores;
            // console.log(this.highScores);
          });
  }

  singlePlayer(){
    this.xPlayer = "Player";
    this.oPlayer = "Computer";
    this.noOfPlayers = 1;
  }

  twoPlayer(){
    this.xPlayer = "Player1";
    this.oPlayer = "Player2";
    this.noOfPlayers = 2;
  }

  iwantx(){
    this.xPlayer = "Player";
    this.oPlayer = "Computer";
    this.oComp = true;
  }
  iwanto(){
    this.xPlayer = "Computer";
    this.oPlayer = "Player";
    this.oComp = false;
  }

  newGame(){
    // console.log('New Game Started.');
    this.squares = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.currentMove = 0;
    this.xScore = { name: this.xPlayer.trim().toLowerCase(), wins: 0, loss: 0, draw: 0 };
    this.oScore = { name: this.oPlayer.trim().toLowerCase(), wins: 0, loss: 0, draw: 0 };
    this.xId = null;
    this.oId = null;

    for (let score of this.highScores) {
      // console.log(score.name, this.xPlayer, this.oPlayer);
      if (score.name === this.xPlayer) {
        this.xId = score._id;
        this.xScore.wins = score.wins;
        this.xScore.loss = score.loss;
        this.xScore.draw = score.draw;
      }
      if (score.name === this.oPlayer) {
        this.oId = score._id;
        this.oScore.wins = score.wins;
        this.oScore.loss = score.loss;
        this.oScore.draw = score.draw;
      }
    }
  }

  get status() {
    if (this.currentMove === 9 && !this.winner) {
      return 'DRAW';
    }
    return this.winner ? 'WINNER : '+ this.winner : 'PLAYER : '+ this.currentPlayer;
  }
  
  makeMove(pos: number){
    if (!this.winner && !this.squares[pos] && this.xScore.name && this.oScore.name) {
      this.currentMove = this.currentMove + 1;
      this.squares[pos] = this.currentPlayer;
      if (this.winningMove()) {
        this.winner = this.currentPlayer;
        if (this.winner === 'X') {
          this.xScore.wins = this.xScore.wins + 1;
          this.oScore.loss = this.oScore.loss + 1;
          this.addScores();
        } else {
          this.xScore.loss = this.xScore.loss + 1;
          this.oScore.wins = this.oScore.wins + 1;
          this.addScores();
        }
        this.scoreService.getScores()
        .subscribe(
          scores => {
            this.highScores = scores;
            // console.log(this.highScores);
          });
        return;
      }
      if (!this.winner && this.currentMove === 9 && this.xScore.name && this.oScore.name) {
        this.xScore.draw = this.xScore.draw + 1;
        this.oScore.draw = this.oScore.draw + 1;
        this.addScores();
        this.scoreService.getScores()
                         .subscribe(
                           scores => {
                             this.highScores = scores;
                            //  console.log(this.highScores);
                           });
        return;
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  winningMove(): boolean {
    const lines = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
    ];

    for (let line of lines) {
      if (this.squares[line[0]] && 
          this.squares[line[0]] === this.squares[line[1]] && 
          this.squares[line[0]] === this.squares[line[2]] ) {
        return true;      
      }
    }
    return false;
  }

  sortTable(n: number){

  }

  addScores() {
    if (!this.xId) {
      // console.log('post x');
      this.scoreService.addScore(this.xScore).subscribe(
        score => {
          this.highScores.push(score);
        });
    } else {
      // console.log('put x', this.xId);
      var temp = {
        _id: this.xId,
        name: this.xScore.name,
        wins: this.xScore.wins,
        loss: this.xScore.loss,
        draw: this.xScore.draw
      };
      // console.log(temp);
      this.scoreService.updateScore(temp)
        .subscribe(data => /*console.log*/(data));
    }

    if (!this.oId) {
      // console.log('post o');
      this.scoreService.addScore(this.oScore).subscribe(
        score => {
          this.highScores.push(score);
        });
    } else {
      // console.log('put o', this.oId);
      var temp = {
        _id: this.oId,
        name: this.oScore.name,
        wins: this.oScore.wins,
        loss: this.oScore.loss,
        draw: this.oScore.draw
      };
      // console.log(temp);
      this.scoreService.updateScore(temp)
        .subscribe(data => /*console.log*/(data));
    }
  }
}
