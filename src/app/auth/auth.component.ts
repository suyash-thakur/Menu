import { Component, OnInit } from '@angular/core';
import { MenuHandlingService } from '../menu-handling.service';
import { AngularFireStorage } from '@angular/fire/storage';

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
  constructor(public menuHandling: MenuHandlingService, private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.menuHandling.getLoggedinData();
  }
  upload(event) {
    console.log('object called');
    this.ref = this.afStorage.ref(this.restaurantName);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
  this.downloadURL = this.task.downloadURL();
  console.log(this.downloadURL);
  }
onSignup(){
  console.log(this.email);
  this.menuHandling.SignUp(this.emailSignup, this.passwordSignup, this.restaurantName);
}
onLogin() {
  this.menuHandling.SignIn(this.email, this.password);
}
}
