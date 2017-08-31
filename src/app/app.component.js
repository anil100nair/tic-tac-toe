"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var score_service_1 = require("./services/score.service");
var AppComponent = (function () {
    function AppComponent(scoreService) {
        var _this = this;
        this.scoreService = scoreService;
        this.squares = Array(9);
        this.currentPlayer = 'X';
        this.winner = null;
        this.currentMove = 0;
        this.noOfPlayers = 1;
        this.oComp = true;
        this.xPlayer = "Player";
        this.oPlayer = "Computer";
        this.xScore = { name: null, wins: 0, loss: 0, draw: 0 };
        this.oScore = { name: null, wins: 0, loss: 0, draw: 0 };
        // console.log('Score Service Initiated.')
        this.scoreService.getScores()
            .subscribe(function (scores) {
            _this.highScores = scores;
            // console.log(this.highScores);
        });
    }
    AppComponent.prototype.singlePlayer = function () {
        this.xPlayer = "Player";
        this.oPlayer = "Computer";
        this.noOfPlayers = 1;
    };
    AppComponent.prototype.twoPlayer = function () {
        this.xPlayer = "Player1";
        this.oPlayer = "Player2";
        this.noOfPlayers = 2;
    };
    AppComponent.prototype.iwantx = function () {
        this.xPlayer = "Player";
        this.oPlayer = "Computer";
        this.oComp = true;
    };
    AppComponent.prototype.iwanto = function () {
        this.xPlayer = "Computer";
        this.oPlayer = "Player";
        this.oComp = false;
    };
    AppComponent.prototype.newGame = function () {
        // console.log('New Game Started.');
        this.squares = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
        this.currentMove = 0;
        this.xScore = { name: this.xPlayer.trim().toLowerCase(), wins: 0, loss: 0, draw: 0 };
        this.oScore = { name: this.oPlayer.trim().toLowerCase(), wins: 0, loss: 0, draw: 0 };
        this.xId = null;
        this.oId = null;
        for (var _i = 0, _a = this.highScores; _i < _a.length; _i++) {
            var score = _a[_i];
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
    };
    Object.defineProperty(AppComponent.prototype, "status", {
        get: function () {
            if (this.currentMove === 9 && !this.winner) {
                return 'DRAW';
            }
            return this.winner ? 'WINNER : ' + this.winner : 'PLAYER : ' + this.currentPlayer;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.makeMove = function (pos) {
        var _this = this;
        if (!this.winner && !this.squares[pos] && this.xScore.name && this.oScore.name) {
            this.currentMove = this.currentMove + 1;
            this.squares[pos] = this.currentPlayer;
            if (this.winningMove()) {
                this.winner = this.currentPlayer;
                if (this.winner === 'X') {
                    this.xScore.wins = this.xScore.wins + 1;
                    this.oScore.loss = this.oScore.loss + 1;
                    this.addScores();
                }
                else {
                    this.xScore.loss = this.xScore.loss + 1;
                    this.oScore.wins = this.oScore.wins + 1;
                    this.addScores();
                }
                this.scoreService.getScores()
                    .subscribe(function (scores) {
                    _this.highScores = scores;
                    // console.log(this.highScores);
                });
                return;
            }
            if (!this.winner && this.currentMove === 9 && this.xScore.name && this.oScore.name) {
                this.xScore.draw = this.xScore.draw + 1;
                this.oScore.draw = this.oScore.draw + 1;
                this.addScores();
                this.scoreService.getScores()
                    .subscribe(function (scores) {
                    _this.highScores = scores;
                    //  console.log(this.highScores);
                });
                return;
            }
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
    };
    AppComponent.prototype.winningMove = function () {
        var lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (this.squares[line[0]] &&
                this.squares[line[0]] === this.squares[line[1]] &&
                this.squares[line[0]] === this.squares[line[2]]) {
                return true;
            }
        }
        return false;
    };
    AppComponent.prototype.sortTable = function (n) {
    };
    AppComponent.prototype.addScores = function () {
        var _this = this;
        if (!this.xId) {
            // console.log('post x');
            this.scoreService.addScore(this.xScore).subscribe(function (score) {
                _this.highScores.push(score);
            });
        }
        else {
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
                .subscribe(function (data) { /*console.log*/ return (data); });
        }
        if (!this.oId) {
            // console.log('post o');
            this.scoreService.addScore(this.oScore).subscribe(function (score) {
                _this.highScores.push(score);
            });
        }
        else {
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
                .subscribe(function (data) { /*console.log*/ return (data); });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "./app.component.html",
        providers: [score_service_1.ScoreService]
    }),
    __metadata("design:paramtypes", [score_service_1.ScoreService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map