import { Component, OnInit } from '@angular/core';
import { Artist } from '../music';
import { MusicService } from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user';

@Component({
    selector: "artist",
    templateUrl: "./all-artists.component.html",
    styleUrls: ["./all-artists.component.css"],
})
export class AllArtistComponent implements OnInit {

    artists: Artist[];
    constructor(private musicService: MusicService,
        private route: ActivatedRoute,
        private router: Router) { }

    user: User;
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        if (this.user != null) {
            this.musicService.allArtist().subscribe((data) => {
                this.artists = data;
            });
        } else {
            this.router.navigate(["/signin"]);
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
}