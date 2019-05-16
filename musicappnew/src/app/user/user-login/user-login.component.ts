import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User, Authenticate } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "login",
    templateUrl: "./user-login.component.html",
    styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {

   
    user: User;
    auth: Authenticate;

    constructor(
        private route: Router,
        private userService: UserService) {
            this.auth=new Authenticate();
         }

    ngOnInit() {

    }
    onSubmit() {


        this.userService.getUserAuthentication(this.auth).subscribe((data) => {
            this.user = data;


            if (this.user != null) {
                if (this.user.role == "admin") {

                    sessionStorage.setItem("user", JSON.stringify(this.user));
                    this.route.navigate(["/admin"])
                }else {
                    //setting session storage
                    sessionStorage.setItem("user", JSON.stringify(this.user));
                    //console.log(JSON.parse(sessionStorage.getItem("user")));
                    this.route.navigate(['/main']);
                }
            } else {
                alert("please enter correct email and password")
                this.route.navigate(['/signin']);
            }

        });




    }

}