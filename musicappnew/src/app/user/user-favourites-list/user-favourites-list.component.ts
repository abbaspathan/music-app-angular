import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Song } from 'src/app/music/music';
import { MusicService } from 'src/app/music/music.service';

@Component({
  selector: "fav-list",
  templateUrl: "./user-favourites-list.component.html",
  styleUrls: ["./user-favourites-list.component.css"]
})
export class UserFavouritesListComponent implements OnInit {
  user: User;
  songs: Song[];
  constructor(private router: Router,
    private userService: UserService,
    private musicService: MusicService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));

    if (this.user != null) {
      this.userService.getAllFavouriteSongs(this.user.userEmail).subscribe((data) => {
        this.songs = data;
      })
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