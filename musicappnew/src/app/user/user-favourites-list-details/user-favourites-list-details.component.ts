import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/music/music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Song } from 'src/app/music/music';
import { User, UserFavourite } from '../user';




@Component({
    templateUrl: "./user-favourites-list-details.component.html",
    styleUrls: ["./user-favourites-list-details.component.css"]
})
export class UserFavouritesListDetailsComponent implements OnInit {
    constructor(private musicService: MusicService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    song: Song;
    user: User;
    favouriteSongList: UserFavourite;
    ngOnInit(): void {
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
            
        if (this.user != null) {
            this.route.paramMap.subscribe((map) => {
                let songId = Number(map.get("songId"));

                this.musicService.songDetails(songId).subscribe((data) => {
                    this.song = data;
                });
            });
        } else {
            this.router.navigate(["/userhome"]);
            alert("please login to access");
        }
    }

    oNav() {
        document.getElementById("mySidenav").style.width = "200px";
    }

    cNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    logout() {
        sessionStorage.removeItem("user");
        this.router.navigate(["/signin"]);
    }


    deleteFavourite(songId:number){

        this.userService.deleteFavourite(this.user.userEmail,songId).subscribe((data) => {
            alert("deleted successfully");
            this.favouriteSongList = data;
            this.router.navigate(["/favourites"]);
        })
    }
}