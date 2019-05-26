import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  isMobile: boolean;

  constructor() {}

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
}
