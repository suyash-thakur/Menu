import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuHandlingService {
  user: any;
  selectedImage: any = null;
  authState: any;
  resturant: any;
  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, private firestore: AngularFirestore, private storage: AngularFirestore) {

  }

  SignIn(email, password) {
     this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
      this.user = result;
      console.log(this.user);
      this.firestore.collection('resturant').doc(this.user.user.uid).get().subscribe(res => {
        this.resturant = res.data();
        console.log(this.resturant);
        if (this.resturant.plan == "free") {
          this.router.navigate(['dash', this.user.user.uid]);
        } else {
          this.router.navigate(['dashboard', this.user.user.uid]);

        }
    });
    });

  }
  SignUp(email, password, name, plan) {
     this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
      this.user = result;
      console.log(this.user);

      this.firestore.collection("menu").doc(this.user.user.uid).set({
        starters: null,
        veg: null,
        nonveg: null
      }).then(result => {
        console.log(result);
      });
      this.firestore.collection("resturant").doc(this.user.user.uid).set({
        name: name,
        plan: plan
      }).then(result => {
        console.log(result);
      });
    });


  }
  isLoggedin() {
    return this.afAuth.authState.pipe(first());
  }
  getLoggedinData() {
    console.log("logged in called");
    this.isLoggedin().pipe(tap(user => {
      if (user) {
        console.log(user);
        // this.router.navigate(['dashboard', this.user.user.uid]);

      } else  {
        console.log("not logged in");
        this.router.navigate['/auth'];
      }
    }))
  }
}
