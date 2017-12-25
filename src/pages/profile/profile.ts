import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
passwordHint="test"
  constructor(public navCtrl: NavController,public storage:Storage, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

updatePassword(value){
 
 this.storage.get('credentials').then((val) => {
   
   if(val.password!=value.oldPassword){
    
     let toast = this.toastCtrl.create({
      message: 'Old password wrong',
      duration: 3000
    });
    toast.present();
    
     return
   }
   if(value.password.length<6){
   let toast = this.toastCtrl.create({
      message: 'Password should be grater than six characters.',
      duration: 3000
    });
    toast.present();
 
  return
} 
if(value.password==value.confirmPassword){


  let credentials={
  username:"admin",
  password:value.password,
  passwordHint:value.passwordHint,
  hintText:value.hintText
}
 this.storage.set("credentials",credentials);
  let toast = this.toastCtrl.create({
      message: 'Profile updated.',
      duration: 3000
    });
    toast.present();
  this.navCtrl.pop();
}else{
   let toast = this.toastCtrl.create({
      message: 'Password and confirm password must be same.',
      duration: 3000
    });
    toast.present();
  
}

   
 });


 

}
}
