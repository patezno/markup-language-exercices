import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  topTracks: any = [];
  loadingArtist: boolean;
  isMobile: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
  });
    this.loadingArtist = true;
  }

  ngOnInit() {
    window.onresize = () => this.isMobile = window.innerWidth <= 690;
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 690) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
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
