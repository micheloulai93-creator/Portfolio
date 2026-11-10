import { Component } from '@angular/core';

interface Entry {
  title: string;
  period: string;
  place: string;
  text: string;
}

interface SkillBar {
  name: string;
  level: number;
}

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss'
})
export class Experiences {
  education: Entry[] = [
    {
      title: 'Licence en Génie Logiciel',
      period: 'Depuis nov. 2024',
      place: 'Institut Ivoirien de Technologie (IIT), Grand-Bassam',
      text: "Développement logiciel, bases de données et conception des systèmes d'information."
    },
    {
      title: 'Baccalauréat scientifique (D)',
      period: 'Sept. 2023 - juin 2024',
      place: 'Lycée Soundiata Keïta, Bamako, Mali',
      text: "Baccalauréat obtenu au cours de l'année scolaire 2023-2024."
    },
    {
      title: "BEPC - Brevet d'Études du Premier Cycle",
      period: 'Oct. 2020 - juin 2021',
      place: 'Collège La Colombe, Bamako, Mali',
      text: "BEPC obtenu au cours de l'année scolaire 2020-2021."
    },
  ];

  experiences: Entry[] = [
    {
      title: 'Développeur Full-Stack',
      period: 'Depuis août 2026',
      place: "CA2MI, Yaou, Côte d'Ivoire",
      text: "Application de gestion d'entreprise : back-end Django REST, front-end React, 8 modules métier, gestion des rôles et permissions, traçabilité des mouvements et inventaires."
    },
    {
      title: 'Logiciel comptable',
      period: 'Mai - juin 2026',
      place: "Projet universitaire, Grand-Bassam, Côte d'Ivoire",
      text: "Conception d'un logiciel comptable pour les PME comportant plus de 5 services fonctionnels."
    },
  ];

  // Niveaux indicatifs : à ajuster honnêtement
  skills: SkillBar[] = [
    { name: 'HTML / CSS', level: 85 },
    { name: 'JavaScript / React', level: 75 },
    { name: 'Python / Django', level: 80 },
    { name: 'SQL / Bases de données', level: 80 },
    { name: 'Flutter / Dart', level: 65 },
    { name: 'UML / Merise', level: 75 },
  ];
}