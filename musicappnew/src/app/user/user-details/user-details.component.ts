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
         
            //null user redirect to home page 
            if(this.user==null){
            alert("please log in to access");
            this.router.navigate(["/userhome"])
        }

            //admin home page button
            if(this.user.role == "admin"){
                document.getElementById("adminbutton").style.display="block";
            }
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