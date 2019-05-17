import { Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFavouritesListComponent } from './user-favourites-list/user-favourites-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserForgetPasswordComponent } from './user-forget-password/user-forget-password.component';
import { UserFavouritesListDetailsComponent } from './user-favourites-list-details/user-favourites-list-details.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserResetPasswordComponent } from './user-reset-password/user-reset-password.component';
import { UserConfirmPasswordComponent } from './user-confirm-password/user-confirm-password.component';


export const userRoutes : Routes = [
    { path: "signup" , component:UserSignupComponent },
    { path: "signin" , component:UserLoginComponent },
    { path: "favourites" , component:UserFavouritesListComponent },
    { path: "favourites/:songId" , component:UserFavouritesListDetailsComponent },
    { path: "userdetails", component:UserDetailsComponent},
    { path: "forget-password", component:UserForgetPasswordComponent},
    { path: "edit-profile", component:UserEditProfileComponent},
    { path: "reset-password", component:UserResetPasswordComponent},
    { path: "confirm-password", component:UserConfirmPasswordComponent},
]