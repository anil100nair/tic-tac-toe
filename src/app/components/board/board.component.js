"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BoardComponent = (function () {
    function BoardComponent() {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    }
    Object.defineProperty(BoardComponent.prototype, "status", {
        get: function () {
            return this.winner ? 'Winner : ' + this.winner : 'Player : ' + this.player;
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.makeMove = function (pos) {
        if (!this.winner && !this.squares[pos]) {
            this.squares[pos] = this.player;
            if (this.winningMove()) {
                this.winner = this.player;
            }
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    };
    BoardComponent.prototype.winningMove = function () {
        var lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (this.squares[line[0]] && this.squares[line[0]] == this.squares[line[1]] && this.squares[line[0]] == this.squares[line[2]]) {
                return true;
            }
        }
        return false;
    };
    BoardComponent.prototype.newGame = function () {
        this.squares = Array(9).fill(null);
        this.player = 'X';
        this.winner = null;
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        selector: 'board',
        templateUrl: './board.component.html',
    })
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map