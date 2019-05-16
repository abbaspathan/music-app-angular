import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Song, Artist } from './music';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MusicService{
    baseUrlForAllSongs = "http://localhost:8082/";
    baseUrlForSong = "http://localhost:8082/";
    baseUrlForAllAlbums = "http://localhost:8083/";
    baseUrlForAlbum = "http://localhost:8083/";
    baseUrlForAllArtists = "http://localhost:8084/";
    baseUrlForArtist = "http://localhost:8084/";
    constructor(private http:HttpClient){}

    allAlbums(): Observable<Album[]>{
        return this.http.get<Album[]>(this.baseUrlForAllAlbums + "album");
    }

    allSongs():Observable<Song[]>{
        return this.http.get<Song[]>(this.baseUrlForAllSongs + "song");
    }

    songDetails(songId:number):Observable<Song>{
        return this.http.get<Song>(this.baseUrlForSong + "song/" + songId);
       
    }
   
    albumDetails(albumId:number):Observable<Album>{
        return this.http.get<Album>(this.baseUrlForAlbum  + "album/" + albumId);
    }

    allArtist(): Observable<Artist[]>{
        return this.http.get<Artist[]>(this.baseUrlForAllArtists + "artist");
    }

    artistDetails(artistId:number):Observable<Artist>{
        return this.http.get<Artist>(this.baseUrlForArtist + "artist/" + artistId);
    }
}