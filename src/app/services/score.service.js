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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ScoreService = (function () {
    function ScoreService(http) {
        this.http = http;
    }
    ScoreService.prototype.getScores = function () {
        // console.log('service get all');
        return this.http.get('/api/')
            .map(function (res) { return res.json(); });
    };
    ScoreService.prototype.getScore = function (id) {
        // console.log('service get one');
        return this.http.get('/api/' + id)
            .map(function (res) { return res.json(); });
    };
    ScoreService.prototype.addScore = function (score) {
        // console.log('service post');
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/', JSON.stringify(score), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ScoreService.prototype.deleteScore = function (id) {
        // console.log('service delete');
        return this.http.delete('/api/' + id)
            .map(function (res) { return res.json(); });
    };
    ScoreService.prototype.updateScore = function (updScore) {
        // console.log('service put');
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/' + updScore._id, JSON.stringify(updScore), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ScoreService;
}());
ScoreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ScoreService);
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map