import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    storage.get('users').then((val) => {
   console.log(val)
    if(val==null){
      storage.set('users',[]);
    }
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

 ionViewDidEnter() {
    console.log('ionViewDidLoad AddUserPage');
     this.storage.get('users').then((val) => {
   console.log(val)
   
  });
  }

addUser(value){
  var userdetails={
    firstName:value.firstName,
    lastName:value.lastName,
    mobile:value.mobile,
    expences:[]
  };
  var users=[]
    
  this.storage.get('users').then((val) => {
     users=val
    users.push(userdetails)
    this.storage.set('users',users);
   this.navCtrl.pop()
  });
 
}
}
