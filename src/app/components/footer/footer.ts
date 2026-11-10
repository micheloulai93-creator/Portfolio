import { Component } from '@angular/core';
import { SOCIALS } from '../../data/socials';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  socials = SOCIALS;
  year = new Date().getFullYear();
}