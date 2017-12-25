import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the AddExpencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-expences',
  templateUrl: 'add-expences.html',
})
export class AddExpencesPage {
 description="";
 amount:number=0;
fExpences:FormData 
expences=[];
users=[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExpencesPage');
  }

ionViewWillEnter(){
  let index=this.navParams.get("index");
  this.storage.get('users').then((val) => {
    this.users=val
  this.expences=val[index].expences
   
  });

}


addExpences(value){
  let exp={
    description:value.description,
    amount:value.amount,
    date:new Date()
  }
  let index=this.navParams.get("index");
this.users[index].expences.push(exp);
 this.storage.set('users',this.users);

}


deleteExpences1(i){

  
  let index=this.navParams.get("index");
  let exp=this.users[index].expences
  exp.splice(i,1)
  this.users[index].expences=exp;
  this.storage.set('users',this.users);
}
deleteExpences(i){
   this.showConfirm(i)
}

 showConfirm(i) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do you want to Delete',
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
            console.log('Agree clicked');
             let index=this.navParams.get("index");
  let exp=this.users[index].expences
  exp.splice(i,1)
  this.users[index].expences=exp;
  this.storage.set('users',this.users);
          }
        }
      ]
    });
    confirm.present();
  }
}
