import { Component, OnInit, ViewChild } from '@angular/core';
import { MdcDrawer, MdcTopAppBar } from '@angular-mdc/web';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 1240;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  matcher: MediaQueryList;
  title = 'Admin settings';

  constructor(private _router: Router) {
  }

  @ViewChild('topAppBar') topAppBar: MdcTopAppBar;
  @ViewChild('appDrawer') appDrawer: MdcDrawer;

  navigationLinks = [
    {name: 'Home', route: 'home', icon: '../assets/Icon%20-%2032x24%20-%20Home.svg'},
    {name: 'General', route: 'general-settings', icon: '../assets/Icon%20-%2032x24%20-%20General%20Settings.svg'},
    {name: 'Roles', route: 'roles', icon: '../assets/Icon%20-%2032x24%20-%20Roles.svg'},
    {name: 'Users', route: 'users', icon: '../assets/Icon%20-%2032x24%20-%20Users.svg'},
    {name: 'Forms', route: 'forms', icon: '../assets/Icon%20-%2032x24%20-%20Forms.svg'},
    {name: 'Episodes', route: 'episodes', icon: '../assets/Icon%20-%2032x24%20-%20Episodes.svg'}
  ];

  isScreenSmall(): boolean {
    return this.matcher.matches;
  }

  ngOnInit(): void {
    this.matcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  }

  onDrawerSelect(route: string, param) {
    this._router.navigate([route]);

    this.appDrawer.open = false;
    console.log(this.appDrawer);
    console.log(param);
  }
}
