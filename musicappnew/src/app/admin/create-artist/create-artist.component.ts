import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/music/music';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
    templateUrl:"./create-artist.component.html",
    selector:"create-artist",
    styleUrls: ["./create-artist.component.css"]
})
export class CreateArtistComponent implements OnInit{

    adminArtist: Song[];
    constructor(private route: ActivatedRoute,
        private  adminService:AdminService){}
    
        ngOnInit(): void{
            this.adminService.CreateArtist().subscribe((data) => {
                this.adminArtist = data;
                console.log(data);      
            });
      }

}