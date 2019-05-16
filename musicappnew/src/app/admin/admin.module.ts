import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';

import { RouterModule } from '@angular/router'
import { adminRoutes } from './admin.routes';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminService } from './admin.service';
import { AdminAlbumComponent } from './admin-create-album/admin-create-album.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { AdminUploadSongComponent } from './admin-upload-song/admin-upload-song.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';

@NgModule({
    declarations: [
        AdminComponent,
        AdminUserComponent,
        AdminAlbumComponent,
        CreateArtistComponent,
        AdminUploadSongComponent,
        AdminUserDetailsComponent,
    ],

    imports: [
        BrowserModule,
        RouterModule.forChild(adminRoutes)
    ],

    providers: [
        AdminService
    ],

    exports: [
        AdminComponent,
        AdminUserComponent,
        RouterModule,
        AdminAlbumComponent,
        CreateArtistComponent,
        AdminUploadSongComponent,
        AdminUserDetailsComponent
    ]
})
export class AdminModule{

}