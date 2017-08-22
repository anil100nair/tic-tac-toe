import { Component } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
})
export class BoardComponent  {
    squares = Array(9).fill(null);
    player = 'X';
    winner :string = null;

    get status() {
        return this.winner ? 'Winner : '+ this.winner : 'Player : '+ this.player;
    }

    makeMove(pos: number){
        if (!this.winner && !this.squares[pos]) {
            this.squares[pos] = this.player;
            if (this.winningMove()) {
                this.winner = this.player;
            }
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    }

    winningMove(): boolean {
        const lines = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,5], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        for (let line of lines) {
            if (this.squares[line[0]] && this.squares[line[0]] == this.squares[line[1]] && this.squares[line[0]] == this.squares[line[2]]) {
                return true;
            }
        }
        return false;
    }

    newGame(): void {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    }
}