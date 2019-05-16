import { Routes } from "@angular/router";
import { AllSongsComponent } from './all-songs/all-songs.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AllAlbumsComponent } from './all-albums/all-albums.component';
import { AllArtistComponent } from './all-artists/all-artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

export const musicroutes: Routes = [
    { path: "allsongs", component: AllSongsComponent },
    { path: "songdetails/:songId", component: SongDetailsComponent },
    { path: "allalbums", component: AllAlbumsComponent },
    { path: "albumdetails/:albumId", component: AlbumDetailsComponent },
    { path: "allartists", component: AllArtistComponent },
    { path: "artistdetails/:artistId", component: ArtistDetailsComponent },
];