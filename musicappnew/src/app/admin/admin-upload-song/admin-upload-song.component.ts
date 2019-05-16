import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Song } from 'src/app/music/music';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./admin-upload-song.component.html",
    selector: "admin-upload-song",
    styleUrls: ["./admin-upload-song.component.css"]
})
export class AdminUploadSongComponent implements OnInit{
    
    adminUpload: Song[];
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


            this.adminService.UploadSong().subscribe((data) => {
                this.adminUpload = data;
                console.log(data);      
            });
      }
}