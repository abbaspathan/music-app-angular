import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./user-details.component.html",
    styleUrls:["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit{
    user: User;


    constructor(private router:Router){}
    
    ngOnInit(){
        this.user = JSON.parse(sessionStorage.getItem("user"));
    }


    oNav() {
        document.getElementById("mySidenav").style.width = "200px";
      }
      
       cNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      logout(){
        sessionStorage.removeItem("user");
        this.router.navigate(["/signin"]);
    }
}