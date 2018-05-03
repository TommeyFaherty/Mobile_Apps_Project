import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews():Observable<any>{
    return this.http.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=cfbea736e0ec4db19cda0130c9bd2856'); 
  }
}

//'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=cfbea736e0ec4db19cda0130c9bd2856'
