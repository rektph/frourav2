import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {
  url;

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
    this.url = "http://bamautomotive.000webhostapp.com/users.php?user=";

  }

  getUserdetails(user, pass) {
    return this.http.get(this.url+user+"&pass="+pass).map(response => response).map(res => res.json());
  }
}
