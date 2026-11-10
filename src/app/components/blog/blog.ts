import { Component } from '@angular/core';

interface Article {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  cover?: string;
  url?: string;
}

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  author = 'Michel Oulaï';

  // Idées d'articles à rédiger. Quand un article est publié :
  // remplacez la date et ajoutez "url" (et "cover" si vous avez une image)
  articles: Article[] = [
    {
      title: 'React et Django en pratique : retour sur le projet CA2MI',
      excerpt: "Les choix techniques, les modules métier et les leçons retenues en construisant une application de gestion d'entreprise.",
      tag: 'React · Django',
      date: 'À venir',
    },
    {
      title: 'Gérer les rôles et permissions dans une application',
      excerpt: "Comment organiser les droits d'accès des utilisateurs côté back-end et côté interface.",
      tag: 'Sécurité · API',
      date: 'À venir',
    },
    {
      title: "Modéliser un système d'information avec UML et Merise",
      excerpt: "De l'analyse des besoins au modèle de données : ma démarche pas à pas.",
      tag: 'UML · Merise',
      date: 'À venir',
    },
  ];
}