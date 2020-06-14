import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuHandlingService } from '../menu-handling.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-dashboard-free',
  templateUrl: './dashboard-free.component.html',
  styleUrls: ['./dashboard-free.component.css']
})
export class DashboardFreeComponent implements OnInit {
  ref: any;
  task: any;
  uploadProgress: any;
  downloadURL: any;
  userId: any;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth, public afStorage: AngularFireStorage ,public router: Router, private firestore: AngularFirestore,
    private storage: AngularFirestore, public menu: MenuHandlingService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId =  this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    this.firestore.collection('menu').doc(this.userId).get().subscribe(res => {
      if(res.exists) {
        console.log(res.data());
      }
    });
  }
  upload(event) {
    console.log('object called');
    this.ref = this.afStorage.ref(this.userId).child(event.target.files[0].name);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.ref.getDownloadURL().subscribe(url => {
      this.downloadURL = url;
      console.log(this.downloadURL);
      this.firestore.collection("menu").doc(this.userId).set({
        menuURL: this.downloadURL
      }).then(res => {
        console.log(this.downloadURL);
      });
    });

  }
  nav() {
    this.router.navigate(['/menuImg', this.userId] );
  }

}
