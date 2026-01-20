import { Component } from '@angular/core';
import { Page } from '../page/page';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [Page, RouterLink, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  username: string = ""
  password: string = ""

  login() {
    
  }
}
