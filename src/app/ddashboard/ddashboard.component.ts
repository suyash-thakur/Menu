import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Dish } from  '../dish.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-ddashboard',
  templateUrl: './ddashboard.component.html',
  styleUrls: ['./ddashboard.component.css']
})
export class DdashboardComponent implements OnInit {

  StarterData: Array<any> = [{
    name: '', price: ''
  }];
  Veg: Array<any> = [{
    name: '', price: ''
  }];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }
  logValue() {
    console.log("clicked");
  }
  addStarters() {
    this.StarterData.push({
      name: '',
      price: ''
    });
  }
  addVeg() {
    this.Veg.push({
      name: '',
      price: ''
    });
  }
  removeStarter(i: number) {
    if(this.StarterData.length > 1){
      this.StarterData.splice(i, 1);
    }
  }
  removeVeg(i: number) {
    if(this.Veg.length > 1){
      this.Veg.splice(i, 1);
    }
  }
  update() {
    console.log(this.StarterData);
  }
  vegUpdate() {
    console.log(this.vegUpdate);
  }

  createDish(){
    return this.firestore.collection('Menu').add(this.StarterData);
}
}
