import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminAlbumComponent } from './admin-create-album/admin-create-album.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { AdminUploadSongComponent } from './admin-upload-song/admin-upload-song.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';

export const adminRoutes : Routes = [
  { path:"admin", component:AdminComponent},
  { path: "admin-user", component:AdminUserComponent  },
  { path: "admin-create-album", component:AdminAlbumComponent},
  { path: "create-artist", component:CreateArtistComponent},
  { path: "admin-upload-song" , component:AdminUploadSongComponent },
  { path: "adminuserdetails/:userEmail" , component:AdminUserDetailsComponent },

]