import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
hintTextDeails=""
passHint=""
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

ionViewWillEnter(){
  this.storage.get('credentials').then((val) => {
    console.log(val)
this.hintTextDeails=val.hintText
this.passHint=val.passwordHint
  })
}

resetPassword(value){
  if(value.passwordHint==this.passHint){
    let credentials={
  username:"admin",
  password:"qwerty",
  passwordHint:"qwerty",
  hintText:"What is your default app password ?"
}
 this.storage.set("credentials",credentials);
  let toast = this.toastCtrl.create({
      message: 'Password Reset Successfully',
      duration: 3000
    });
    toast.present();
    this.navCtrl.pop();
  }else{
    let toast = this.toastCtrl.create({
      message: 'Invalid Password Hint',
      duration: 3000
    });
    toast.present();
  }
}
}
