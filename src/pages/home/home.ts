import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:String;
  pass:String;
  userdetails : {
    id:String,
    name:String,
    user:String,
    pass:String,
    auth:String
  }
  url;

  constructor(public navCtrl: NavController, private http:Http) {
    this.url = "http://bamautomotive.000webhostapp.com/users.php?";
  }

  sendDetails() {
    this.http.get(this.url+"user=ken"+"&pass=123").map(response => response.json())
            .subscribe(result => this.userdetails = result.json());
    console.log(this.userdetails);
  }
}
