import { Component } from '@angular/core';
import { Page } from '../page/page';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-page',
  imports: [Page, RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  username: string = ""
  password: string = ""
  full_name: string = ""
  email: string = ""
  repeat_password: string = ""
  
  register() {
    
  }
}
