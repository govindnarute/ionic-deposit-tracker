import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddExpencesPage } from './add-expences';

@NgModule({
  declarations: [
    AddExpencesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddExpencesPage),
  ],
})
export class AddExpencesPageModule {}
