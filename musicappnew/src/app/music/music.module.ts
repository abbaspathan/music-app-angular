import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { AllAlbumsComponent } from './all-albums/all-albums.component';
import { HttpClientModule } from '@angular/common/http';
import { MusicService } from './music.service';
import { SongDetailsComponent } from './song-details/song-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { RouterModule } from '@angular/router';
import { musicroutes } from './music.routes';
import { AllArtistComponent } from './all-artists/all-artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
    declarations: [
        AllSongsComponent,
        AllAlbumsComponent,
        AllArtistComponent,
        SongDetailsComponent,
        AlbumDetailsComponent,
        ArtistDetailsComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,

        RouterModule.forChild(musicroutes)
      ],
      providers: [
        MusicService
      ],
      exports:[
        AllSongsComponent,
        AllAlbumsComponent,
        AllArtistComponent,
        SongDetailsComponent,
        AlbumDetailsComponent,
        ArtistDetailsComponent
      ],
      bootstrap: []
})
export class MusicModule{}