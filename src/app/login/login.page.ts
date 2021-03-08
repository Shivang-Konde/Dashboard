import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  postdata={
    
    'email': ' ',
    'password':' '
    
  
    
  };
  obj:any;
  // obj=[];
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }
  modify(){
    this.http.post("http://127.0.0.1:8000/login/", this.postdata).subscribe(data=>{
      console.log(data);
      this.obj=data;
      this.router.navigateByUrl('/home')
      alert("Sucessfully Logged In")
    })
  }
}
