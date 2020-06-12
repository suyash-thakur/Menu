import { Component, OnInit } from '@angular/core';
import { MenuHandlingService } from '../menu-handling.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
starters: any;
veg: any;
nonveg: any;
resname: any = '';

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, public menuHandling: MenuHandlingService) {
    const userId =  this.route.snapshot.paramMap.get('id');
    this.firestore.collection('menu').doc(userId).get().subscribe(res => {
      if(res.exists) {
        const data = res.data();
        this.starters = data.starters;
        this.veg = data.veg;
        this.nonveg = data.nonveg;
        console.log(this.starters);
      } else {
        console.log('no document');
      }
     });

     this.firestore.collection('resturant').doc(userId).get().subscribe(res => {
      if(res.exists) {
        const data = res.data();
        this.resname = data;
        console.log(this.resname);
      } else {
        console.log('no document');
      }
     });
  }


  ngOnInit() {
  }

}
