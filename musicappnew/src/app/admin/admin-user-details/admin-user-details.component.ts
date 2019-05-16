import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';

@Component({
    templateUrl: "./admin-user-details.component.html",
    styleUrls:["./admin-user-details.component.css"]
})
export class AdminUserDetailsComponent implements OnInit{
    user: User;


    constructor(private router:Router,
                private route:ActivatedRoute,
                private userService:UserService){}
    
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

         this.route.paramMap.subscribe((map)=>{
         let email = map.get("userEmail");

         this.userService.getUserByEmail(email).subscribe((data) => {
            this.user = data;
            console.log(data);      
        });
         })
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