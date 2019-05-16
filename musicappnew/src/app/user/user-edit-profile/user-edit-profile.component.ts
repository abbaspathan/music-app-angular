import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./user-edit-profile.component.html",
    selector: "/edit-profile",
    styleUrls:["./user-edit-profile.component.css"]

})
export class UserEditProfileComponent implements OnInit{

    constructor(private userService:UserService,
                private router:Router){}

    user:User;
    ngOnInit(){
        this.user=JSON.parse(sessionStorage.getItem("user"));
    }

    userEditProfile(){
        this.userService.userEditProfile(this.user).subscribe((data) =>{
            this.user = data;
            alert("user details updated successfully")
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.router.navigate(["/userdetails"]);
        })
        
    }
}