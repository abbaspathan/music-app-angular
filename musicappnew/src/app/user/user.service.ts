import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserFavourite, Authenticate } from './user';
import { Observable } from 'rxjs';
import { Song } from '../music/music';


@Injectable()
export class UserService{
    

    baseUrl = "http://localhost:8081/";
    baseUrlForFavouriteSong = "http://localhost:8085/";

    constructor(private http: HttpClient){}

    newUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + "user", user);
    }

    getUserByEmail(email:string):Observable<User> {
       return this.http.get<User>(this.baseUrl+ "user/bymail/" + email);
    }

    addToFavourite(userEmail:string,songId:number):Observable<UserFavourite>{
        return this.http.post<UserFavourite>(this.baseUrlForFavouriteSong + "favourite/" +  userEmail + "/"+ songId , UserFavourite);
    }

    getAllFavouriteSongs(email:string):Observable<Song[]>{
        return this.http.get<Song[]>(this.baseUrlForFavouriteSong +"favourite/" + email);
    }

    deleteFavourite(userEmail:string,songId:number):Observable<UserFavourite>{
         return this.http.put<UserFavourite>(this.baseUrlForFavouriteSong + "favourite/"+ userEmail +"/"+ songId,UserFavourite);
    }

    userEditProfile(user:User):Observable<User>{
        return this.http.put<User>(this.baseUrl + "user" ,user);
    }

    getUserAuthentication(auth:Authenticate):Observable<User>{
        return this.http.post<User>(this.baseUrl + "user/auth",auth);
    }
}