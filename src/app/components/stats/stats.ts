import { Component } from '@angular/core';

interface Fact {
  icon: string;
  value: number;
  plus: boolean;
  label: string;
}

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {
  facts: Fact[] = [
    { icon: 'mbri-rocket', value: 3, plus: false, label: 'Projets réalisés' },
    { icon: 'mbri-layers', value: 8, plus: false, label: 'Modules métier (CA2MI)' },
    { icon: 'mbri-database', value: 3, plus: false, label: 'SGBD utilisés' },
    { icon: 'mbri-magic-stick', value: 5, plus: true, label: 'Langages de programmation' },
  ];
}