import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Song } from 'src/app/music/music';

@Component({
    templateUrl: "./admin-upload-song.component.html",
    selector: "admin-upload-song",
    styleUrls: ["./admin-upload-song.component.css"]
})
export class AdminUploadSongComponent implements OnInit{
    
    adminUpload: Song[];
    constructor(private route: ActivatedRoute,
        private  adminService:AdminService){}
    
        ngOnInit(): void{
            this.adminService.UploadSong().subscribe((data) => {
                this.adminUpload = data;
                console.log(data);      
            });
      }
}