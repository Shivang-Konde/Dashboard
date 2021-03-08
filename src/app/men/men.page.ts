import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.page.html',
  styleUrls: ['./men.page.scss'],
})
export class MenPage implements OnInit {
  trend=[];
  constructor() { 
    this.trend=[
      {name: 'Black Blazer' , price: '$150', imgurl:'/assets/men/blazer2.jpg'},
      {name: 'Black Shirt' , price: '$15', imgurl:'/assets/men/Bshirt.jpg'},
      {name: 'Jacket' , price: '$45', imgurl:'/assets/men/jacket3.jpg'},
      {name: 'Formal Shirt' , price: '$30', imgurl:'/assets/men/Shirt.jpg'},
      {name: 'White Blazer' , price: '$135', imgurl:'/assets/men/Wblazer.jpg'},
      {name: 'Hoodie' , price: '$60', imgurl:'/assets/men/Hoddie2.jpg'}
    ];
  }

  ngOnInit() {
  }

}
