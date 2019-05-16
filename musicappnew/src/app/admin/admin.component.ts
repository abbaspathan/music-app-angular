import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';

@Component({
    templateUrl: "./admin.component.html",
    selector: "admin",
    styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit{

    constructor(private router:Router){}

    user:User;

    ngOnInit(){
        this.user = JSON.parse(sessionStorage.getItem("user"));
         
            //null user redirect to home page 
            if(this.user==null){
            alert("please log in to access");
            this.router.navigate(["/userhome"])
        }
    }

    oNav() {
        document.getElementById("mySidenav").style.width = "200px";
    }

    cNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    logout() {
        sessionStorage.removeItem("user");
        this.router.navigate(["/signin"]);
    }
}