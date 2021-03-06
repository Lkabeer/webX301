import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  constructor(public authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
