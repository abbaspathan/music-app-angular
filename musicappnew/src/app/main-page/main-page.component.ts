import { Component, OnInit } from "@angular/core";
import { User } from '../user/user';
import { Router } from '@angular/router';
@Component({
 templateUrl:'./main-page.component.html',
 selector:"main",
 styleUrls:["./main-page.component.css"]
})
export class MainPageComponent implements OnInit{

user:User;
    constructor(private router: Router){}

    ngOnInit(){
        this.user = JSON.parse(sessionStorage.getItem("user"));


        //admin home page button
        if(this.user.role == "admin"){
            document.getElementById("adminbutton").style.display="block";
        }


        if(this.user!=null){
            
        }else{
            alert("please login to access");
           this.router.navigate(["/signin"]);
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