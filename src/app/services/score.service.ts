import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ScoreService{
    constructor(private http: Http){
    }

    getScores() {
        return this.http.get('/api/')
            .map(res => res.json());
    }
}