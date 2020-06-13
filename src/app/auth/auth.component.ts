import { Component, OnInit } from '@angular/core';
import { MenuHandlingService } from '../menu-handling.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 email: any;
 password: any;
 emailSignup: any;
 passwordSignup: any;
 restaurantName: any;
 ref: any;
  task: any;
  uploadProgress: any;
  downloadURL: any;
  plan: any;
  authState: any;
  user: any;
  resturant: any;
  constructor(public menuHandling: MenuHandlingService, private afStorage: AngularFireStorage, public afAuth: AngularFireAuth,public router: Router, private firestore: AngularFirestore) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.firestore.collection('resturant').doc(user.uid).get().subscribe(res => {
        this.resturant = res.data();
        console.log(this.resturant);
        if (this.resturant.plan == "free") {
          this.router.navigate(['dash', this.user.uid]);
        } else {
          this.router.navigate(['dashboard', this.user.uid]);

        }
    });
    });
   }

  ngOnInit() {
    this.menuHandling.getLoggedinData();
  }
  upload(event) {
    console.log('object called');
    this.ref = this.afStorage.ref('Menu');
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
  this.downloadURL = this.task.downloadURL();
  console.log(this.downloadURL);
  }
onSignup(){
  console.log(this.email);
  this.menuHandling.SignUp(this.emailSignup, this.passwordSignup, this.restaurantName, this.plan);
}
onLogin() {
  this.menuHandling.SignIn(this.email, this.password);
}
}
