import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  isMobile: boolean;

  constructor(public search: SearchService, private router: Router) {}

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

  onSubmit() {
    this.router.navigateByUrl('/search');
  }
}
