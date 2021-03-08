import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  
  email:any;
  password:any;
  constructor(private http: HttpClient) {
    // this.http.get("http://127.0.0.1:8000/login/").subscribe(data=>{
      
    // })
   }

  ngOnInit() {
    
  }
  
}
