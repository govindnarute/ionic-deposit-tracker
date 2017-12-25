import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ResetPasswordPage } from "../reset-password/reset-password";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
username="";
password="";
uname="";
pass="";
  constructor(public navCtrl: NavController,public storage:Storage, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
ionViewWillEnter(){
   this.storage.get('credentials').then((val) => {
     if(val==null){
let credentials={
  username:"admin",
  password:"qwerty",
  passwordHint:"qwerty",
 hintText:"What is your default app password ?"
}
 this.storage.set("credentials",credentials);
     }else{
    console.log(val)
    this.pass= val.password;
    this.uname=val.username;
    }


   });
}
signIn(){
  console.log(this.username)
  console.log(this.password)
  if(this.username==this.uname&&this.password==this.pass){
    this.navCtrl.push(TabsPage)

  }else{
let toast = this.toastCtrl.create({
      message: 'Invalid Credential',
      duration: 3000
    });
    toast.present();
  }
  }
  
resetPassword(){
  this.navCtrl.push(ResetPasswordPage)
}
}
