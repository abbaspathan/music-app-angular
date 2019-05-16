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

constructor(private route: ActivatedRoute,
    private  adminService:AdminService){}

    ngOnInit(): void{
        // this.route.paramMap.subscribe((map)=>{
        //     let category = map.get("");
        //     console.log(_id);

            this.adminService.findAllUser().subscribe((data) => {
                this.user = data;
                console.log(data);      
            });
        // });
    }
}