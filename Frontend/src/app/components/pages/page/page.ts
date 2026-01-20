import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [RouterLink],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  constructor(private router: Router) {

  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
