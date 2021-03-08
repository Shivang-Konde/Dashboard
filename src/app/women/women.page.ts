import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.page.html',
  styleUrls: ['./women.page.scss'],
})
export class WomenPage implements OnInit {
  trend=[];
  constructor() { 
    this.trend=[
      {name: 'Anarcali' , price: '$150', imgurl:'/assets/women/anarcali.jpg'},
      {name: 'Frock' , price: '$15', imgurl:'/assets/women/frocks.jpg'},
      {name: 'Lehenga' , price: '$45', imgurl:'/assets/women/lehenga.jpg'},
      {name: 'Pajamas' , price: '$30', imgurl:'/assets/women/pajamas.jpg'},
      {name: 'Tunic Top' , price: '$135', imgurl:'/assets/women/tunic.jpg'},
      {name: 'Women Foraml' , price: '$60', imgurl:'/assets/women/Woformal.jpg'}
    ]
  }

  ngOnInit() {
  }

}
