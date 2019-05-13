import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {

  isMobile: boolean;

  constructor() { }

  ngOnInit() {
    window.onresize = () => this.isMobile = window.innerWidth <= 991;
  }

}
