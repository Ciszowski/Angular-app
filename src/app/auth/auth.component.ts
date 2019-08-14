import { Component, OnInit } from '@angular/core';
import {AuthServices} from "../services/auth.services"
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus : boolean;
  constructor(private Login : AuthServices, private router : Router){}

  ngOnInit() {
    this.authStatus = this.Login.isAuth
  }
  onSignIn = ()=>{
    this.Login.signIn().then(() =>{
      this.authStatus = this.Login.isAuth;
      this.router.navigate(['appareils'])
    })
  }
  onSignOut = ()=> {
    this.Login.signOut();
    this.authStatus = this.Login.isAuth;
  }
}
