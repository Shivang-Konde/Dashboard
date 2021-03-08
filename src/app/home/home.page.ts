import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isDesk=true;
  categories=[];
  cloths=[];
  constructor(private platform : Platform) { 
    this.isDesk=!this.platform.is('desktop');
    this.categories=[
      {title:'T-shirt' ,des: 'starting From $20' ,imgurl: '/assets/T-shirt.jpg'},
      {title:'WinterWear' ,des: 'starting From $60' ,imgurl: '/assets/Winter.jpg'},
      {title:'Formals' ,des: 'starting From $100' ,imgurl: '/assets/Formals.jpg'},
      {title:'Jackets' ,des: 'starting From $40' ,imgurl: '/assets/jackets.jpg'}
    ];
    this.cloths=[
      {name: 'Men\'s Blazer' , price: '$150', imgurl:'/assets/cloths/blazer.jpg'},
      {name: 'Men\'s Hoddie' , price: '$150', imgurl:'/assets/cloths/Hoodie.jpg'},
      {name: 'Men\'s Jacket' , price: '$150', imgurl:'/assets/cloths/jackets2.jpg'},
      {name: 'Women\'s Top' , price: '$150', imgurl:'/assets/cloths/top.jpg'}
    ]
  }

  ngOnInit() {
  }

}
