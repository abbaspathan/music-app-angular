import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: "forget-password",
    templateUrl: "./user-forget-password.component.html",
    styleUrls: ["./user-forget-password.component.css"]
})
export class UserForgetPasswordComponent implements OnInit {

    email: string;
    user: User;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
    }

    onSubmit() {

        this.userService.getUserByEmail(this.email).subscribe((data) => {
            this.user = data;

            if (this.user == null) {
                alert("Invalid Email..Please mention correct email");
            }
            else {
                localStorage.setItem("pass",JSON.stringify(this.user));
                this.router.navigate(['/reset-password']);
            }
        });

    }
}