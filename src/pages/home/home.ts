import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:String;
  pass:String;
  url;

  constructor(public navCtrl: NavController,
              private loginProv: LoginProvider,
              private alertCtrl: AlertController) {
    this.url = "http://bamautomotive.000webhostapp.com/users.php?user=ken&pass=123";
  }

  sendDetails() {
    if(this.user == "" || this.pass == "") {
      this.showAlert('Empty Fields!', 'Fields should not be empty.');
    } else {
      this.loginProv.getUserdetails(this.user, this.pass).subscribe(userdetails => {
        
        if(userdetails.user[0].auth == "1") {
          this.navCtrl.push(TabsPage);
        } else {
          this.showAlert('No User Found!', 'User is not yet signed up!');
        }
      });
    }
  }

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
