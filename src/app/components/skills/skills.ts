import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  services: Service[] = [
    {
      icon: 'mbri-tablet',
      title: 'Développement Frontend',
      text: "HTML5, CSS3, JavaScript et React : conception d'interfaces web modernes et interactives."
    },
    {
      icon: 'mbri-rocket',
      title: 'Développement Backend',
      text: "Python et Django REST : conception d'API, logique métier et applications backend."
    },
    {
      icon: 'mbri-database',
      title: 'Bases de données',
      text: 'MySQL, PostgreSQL et SQL Server : conception, modélisation et requêtes SQL.'
    },
    {
      icon: 'mbri-mobile',
      title: 'Applications mobiles',
      text: "Flutter et Dart : conception et développement d'applications mobiles."
    },
    {
      icon: 'mbri-layers',
      title: 'Analyse & conception',
      text: "UML, Merise, StarUML et Draw.io : analyse des besoins et modélisation des systèmes d'information."
    },
    {
      icon: 'mbri-hot-cup',
      title: 'UI/UX Design',
      text: 'Maquettes et visuels avec Figma et Canva.'
    },
  ];
}