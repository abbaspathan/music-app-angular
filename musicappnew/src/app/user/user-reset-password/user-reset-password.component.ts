import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    templateUrl: "./user-reset-password.component.html",
    selector: "reset-password",
    styleUrls: ["./user-reset-password.component.css"]
})
export class UserResetPasswordComponent implements OnInit{
     user: User;
    answer:string;
    constructor(private route: Router,
        private userService: UserService) {}

        ngOnInit() {
            this.user = JSON.parse(localStorage.getItem("pass"));
        }

        onSubmit(){
           if(this.user.securityAnswer == this.answer){
               this.route.navigate(['/confirm-password']);
           }else{
               alert("security answer not matched!! Please enter again...")
           }
        }
}