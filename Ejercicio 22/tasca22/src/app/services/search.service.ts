import { Injectable } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Injectable({
    providedIn: 'root'
  })
export class SearchService {

    loading: boolean;
    error: boolean;
    artistas: any[] = [];

    constructor(private spotify: SpotifyService) {}

    buscar(termino: string) {
      this.loading = true;
      this.error = false;
      this.spotify.getArtistas(termino).subscribe(data => {
          this.artistas = data;
          this.loading = false;
        }, error => {
            this.loading = false;
            this.error = true;
        });
      }
}
