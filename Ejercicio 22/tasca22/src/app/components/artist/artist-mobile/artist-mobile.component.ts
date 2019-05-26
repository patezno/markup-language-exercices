import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-mobile',
  templateUrl: './artist-mobile.component.html',
  styleUrls: []
})
export class ArtistMobileComponent implements OnInit {

  artista: any = {};
  topTracks: any = [];
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
    this.loadingArtist = true;
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }
}
