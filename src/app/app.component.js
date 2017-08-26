"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.players = 1;
        this.ocomp = true;
        this.xplayer = "Player";
        this.oplayer = "Computer";
        this.highScores = [{ "name": "anil", "wins": 100, "loss": 0, "draw": 13 },
            { "name": "raghu", "wins": 345, "loss": 4, "draw": 78 },
            { "name": "ramesh", "wins": 567, "loss": 450, "draw": 34 },
            { "name": "rob", "wins": 345, "loss": 567, "draw": 5 },
            { "name": "Nancy", "wins": 5, "loss": 45, "draw": 2 },
            { "name": "dugh", "wins": 78, "loss": 12, "draw": 78 },
            { "name": "chikara", "wins": 4, "loss": 10, "draw": 56 }
        ];
    }
    AppComponent.prototype.single = function () {
        // console.log(this.players);
        this.xplayer = "Player";
        this.oplayer = "Computer";
        for (var _i = 0, _a = this.highScores; _i < _a.length; _i++) {
            var scorer = _a[_i];
            console.log(scorer, scorer.name);
        }
    };
    AppComponent.prototype.dual = function () {
        this.xplayer = "Player 1";
        this.oplayer = "Player 2";
    };
    AppComponent.prototype.iwantx = function () {
        this.xplayer = "Player";
        this.oplayer = "Computer";
        this.ocomp = true;
    };
    AppComponent.prototype.iwanto = function () {
        this.xplayer = "Computer";
        this.oplayer = "Player";
        this.ocomp = false;
    };
    AppComponent.prototype.sortTable = function (n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("highScores");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            console.log(rows);
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            }
            else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map