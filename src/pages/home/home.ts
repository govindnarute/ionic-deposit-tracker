import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddExpencesPage } from "../add-expences/add-expences";
import { AddUserPage } from "../add-user/add-user";
import { AlertController } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
users=[]
totalAmount=0
  constructor(public navCtrl: NavController,public storage:Storage,public app:App,public alertCtrl: AlertController) {

  }

  logout(){
 this.showConfirm()
}

ionViewWillEnter(){
   this.totalAmount=0
   this.storage.get('users').then((val) => {
    
    
  
    this.users=val
     this.users.forEach(element => {
      let total=0 
     console.log(element)
     element.expences.forEach(e => {
      console.log(e)
      this.totalAmount=this.totalAmount+ parseInt(e.amount)
      total=total+parseInt(e.amount)

     });
     element.totalExp=total
   });
   console.log(this.users)
  });
  
}
goToAddUser(){
  
  this.navCtrl.push(AddUserPage)
}
setData(){
  console.log("set Data")
  this.storage.set("name","govnind");
}
getData(){
  console.log("get Data")
   this.storage.get("name").then((val) => {
    console.log('Your name is', val);
  });
   this.storage.get('users').then((val) => {
    console.log(val)
    
   
  });
  


}
getExpences(user,i){
  console.log(user)
  this.navCtrl.push(AddExpencesPage,{
    index:i,
    user:user
  })
}

 showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you want to Logout',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
          const root=this.app.getRootNav();
  root.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }

  deleteUser(i){
    this.showConfirmDelete(i);
  }

  showConfirmDelete(i) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you want to Delete User',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
         let usersnew=this.users
  usersnew.splice(i,1)
  
  this.storage.set('users',usersnew);
          }
        }
      ]
    });
    confirm.present();
  }

  profile(){
    this.navCtrl.push(ProfilePage);
  }
}