import { Component } from '@angular/core';
import { SOCIALS } from '../../data/socials';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  socials = SOCIALS;
}