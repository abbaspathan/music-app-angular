export class Song {
    songId: number;
    songTitle: string;
    songUrl: string;
    albumId: number;
    albumName:string;
    artistId:number;
    artistName: string;
    regionName: string;
    songImage: string;
}

export class Album {
    albumId: number;
    albumName: string;
    albumImage: string;
    songs: Song[];
}

export class Artist {
    artistId: number;
    artistName: string;
    artistImage: string;
    songs: Song[];
}

export class Region {
    regionId: number;
    regionName: string;
    regionImage: string;
    songs: Song[];
}