import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Score } from '../model/score.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ScoreService{
    constructor(private http: Http){
    }

    getScores() {
        // console.log('service get all');
        return this.http.get('/api/')
            .map(res => res.json());
    }

    getScore(id: string) {
        // console.log('service get one');
        return this.http.get('/api/'+id)
            .map(res => res.json())
    }

    addScore(score: Score) {
        // console.log('service post');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/', JSON.stringify(score), {headers: headers})
            .map(res => res.json());
    }

    deleteScore(id: string) {
        // console.log('service delete');
        return this.http.delete('/api/'+id)
            .map(res => res.json());
    }

    updateScore(updScore: any) {
        // console.log('service put');
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/'+updScore._id, JSON.stringify(updScore), {headers: headers})
            .map(res => res.json());
    }
}