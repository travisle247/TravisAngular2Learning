import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id ='5354441c815dea07deaa';
    private client_secret = '025f152ca126ea1207363bcef454c0095d9a7833';

    constructor(private _http: Http) {
        console.log("Service is ready");
        this.username = 'travisle247';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}
