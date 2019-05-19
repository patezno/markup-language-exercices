import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: []
})
export class ErrorComponent implements OnInit {

  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases().subscribe(data => console.log(data), error => {
        this.mensajeError = error.error.error.message;
      });
  }

  ngOnInit() {
  }

}
