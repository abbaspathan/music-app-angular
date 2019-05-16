import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "signup",
    templateUrl: "./user-signup.component.html",
    styleUrls: ["./user-signup.component.css"]
})
export class UserSignupComponent {

    userForm: FormGroup;
    constructor(private fb: FormBuilder,
        private userService: UserService,
        private router: Router) { }

    user: User;

    confirmPassword:string;

    ngOnInit() {

        this.user = new User();

        this.userForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            phone: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm_password: ['', Validators.required],
            question: ['', Validators.required],
            answer: ['', Validators.required],
            checkbox: ['', Validators.required]


        });
    }

    onSubmit() {

        if(this.user.userPassword != this.confirmPassword)
        {
            alert("confirm your password, its not same!!!!")
        }
        else{
            this.userService.newUser(this.user).subscribe((data) => {
                console.log("success");
                console.log(this.user);
                if (data != null) {
                    alert("Registration is succesful.");
                    this.router.navigate(["/signin"]);
                }
            });
    

        }
        

    }

    get first_name() { return this.userForm.controls.first_name; }
    get last_name() { return this.userForm.controls.last_name; }
    get phone() { return this.userForm.controls.phone; }
    get username() { return this.userForm.controls.username; }

    get email() { return this.userForm.controls.email; }
    get password() { return this.userForm.controls.password; }
    get confirm_password() { return this.userForm.controls.confirm_password; }
    get question() { return this.userForm.controls.question; }

    get answer() { return this.userForm.controls.answer; }
    get checkbox() { return this.userForm.controls.checkbox; }





}