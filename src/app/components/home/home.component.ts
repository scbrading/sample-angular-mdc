import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  onNavCardSelect(route: string) {
    this._router.navigate([route]);

  }

}
