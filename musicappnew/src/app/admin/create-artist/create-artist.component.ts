import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/music/music';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';

@Component({
    templateUrl:"./create-artist.component.html",
    selector:"create-artist",
    styleUrls: ["./create-artist.component.css"]
})
export class CreateArtistComponent implements OnInit{

    adminArtist: Song[];
    user:User;
    constructor(private route: ActivatedRoute,
        private  adminService:AdminService,
        private router:Router){}
    
        ngOnInit(): void{

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
        
            this.adminService.CreateArtist().subscribe((data) => {
                this.adminArtist = data;
                console.log(data);      
            });
      }

}