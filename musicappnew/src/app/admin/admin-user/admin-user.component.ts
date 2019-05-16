import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
    templateUrl: "./admin-user.component.html",
    selector: "admin-user",
    styleUrls: ["./admin-user.component.css"]

})
export class AdminUserComponent implements OnInit{

user:User[];
user1:User;

constructor(private route: ActivatedRoute,
    private  adminService:AdminService,
    private router:Router){}

    ngOnInit(): void{
    
        this.user1 = JSON.parse(sessionStorage.getItem("user"));

         
            //null user redirect to home page 
            if(this.user1==null){
            alert("please log in to access");
            this.router.navigate(["/userhome"])
        }

             //admin home page button
        if(this.user1.role == "admin"){
            document.getElementById("adminbutton").style.display="block";
        }

            this.adminService.findAllUser().subscribe((data) => {
                this.user = data;
                console.log(data);      
            });
        // });
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