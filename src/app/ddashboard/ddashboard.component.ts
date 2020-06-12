import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Dish } from  '../dish.model';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { MenuHandlingService } from '../menu-handling.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ddashboard',
  templateUrl: './ddashboard.component.html',
  styleUrls: ['./ddashboard.component.css']
})
export class DdashboardComponent implements OnInit {
  items: any;

  StarterData: Array<any> = [{
    name: '', price: '',
  }];
  Veg: Array<any> = [{
    name: '', price: ''
  }];
  nonveg: Array<any> = [{
    name: '', price: ''
  }];
  constructor(private firestore: AngularFirestore, public menuHandling: MenuHandlingService, private route: ActivatedRoute) { }

  ngOnInit() {
   const userId =  this.route.snapshot.paramMap.get('id');

    this.firestore.collection('menu').doc(userId).get().subscribe(res => {
     if(res.exists) {
       const data = res.data();
       console.log(data);
     } else {
       console.log('no document');
     }
    });
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
  addNonveg() {
    this.nonveg.push({
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
  removenonVeg(i: number) {
    if(this.nonveg.length > 1){
      this.nonveg.splice(i, 1);
    }
  }
  update() {
    console.log(this.StarterData);
  }
  async vegUpdate() {
    console.log(this.Veg);

    await this.firestore.collection('menu').doc(this.menuHandling.user.user.uid).update({
      veg: firebase.firestore.FieldValue.arrayUnion(...this.Veg)
    });
    console.log("updated");

  }
  async nonvegUpdate() {
    console.log(this.Veg);

    await this.firestore.collection('menu').doc(this.menuHandling.user.user.uid).update({
      nonveg: firebase.firestore.FieldValue.arrayUnion(...this.nonveg)
    });
    console.log("updated");

  }
  async createDish(){
    console.log(this.StarterData);
    this.items = Object.assign({}, ...this.StarterData);
    const dish = {}
    console.log(this.items);
    await this.firestore.collection('menu').doc(this.menuHandling.user.user.uid).update({
      starters: firebase.firestore.FieldValue.arrayUnion(...this.StarterData)
    });
    console.log("updated");
}
}
