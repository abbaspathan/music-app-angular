import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./user-confirm-password.component.html",
    selector: "confirm-password",
    styleUrls: ["./user-confirm-password.component.css"]
})
export class UserConfirmPasswordComponent implements OnInit{
    user:User;
    password:string;
    confirmPassword:string;
    constructor(private userService:UserService,
                private router:Router){}

    ngOnInit(){
        this.user = JSON.parse(localStorage.getItem("pass"));
    }

    onSubmit(){

        if(this.confirmPassword == this.password){

            this.user.userPassword = this.password;
            this.userService.userEditProfile(this.user).subscribe((data) =>{
                alert("password changed succesfully..")
                sessionStorage.removeItem("pass");
                this.router.navigate(["/signin"]);
            })
        }else{
            alert("please enter same password!!!");
        }
    }
}