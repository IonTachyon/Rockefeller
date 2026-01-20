import { Component, inject } from '@angular/core';
import { Page } from '../page/page';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-front-page',
  imports: [Page],
  templateUrl: './front-page.html',
  styleUrl: './front-page.css',
})
export class FrontPage {
}
