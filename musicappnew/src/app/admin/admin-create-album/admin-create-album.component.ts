import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/music/music';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
    templateUrl:"./admin-create-album.component.html",
    selector:"admin-create-album",
    styleUrls: ["./admin-create-album.component.css"]
})
export class AdminAlbumComponent implements OnInit{
    
    adminAlbum: Song[];
    constructor(private route: ActivatedRoute,
        private  adminService:AdminService){}
    
        ngOnInit(): void{
            this.adminService.CreateAlbum().subscribe((data) => {
                this.adminAlbum = data;
                console.log(data);      
            });
      }
}