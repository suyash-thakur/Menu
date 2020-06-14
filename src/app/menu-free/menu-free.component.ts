import { Component, OnInit } from '@angular/core';
import { MenuHandlingService } from '../menu-handling.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-menu-free',
  templateUrl: './menu-free.component.html',
  styleUrls: ['./menu-free.component.css']
})
export class MenuFreeComponent implements OnInit {
menuURL: any;
  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public menuHandling: MenuHandlingService) {
    const userId =  this.route.snapshot.paramMap.get('id');
    this.firestore.collection('menu').doc(userId).get().subscribe(res => {
      if (res.exists) {
        const Data = res.data();
        console.log(Data);
        this.menuURL = Data.menuURL;
      }});
  }

  ngOnInit() {
  }

}
