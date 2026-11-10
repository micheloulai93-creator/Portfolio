import { Component, HostListener, signal } from '@angular/core';

interface Project {
  title: string;
  category: string;
  impact: string;
  role?: string;
  tech: string[];
  images: string[];
  demoUrl?: string;
  codeUrl?: string;
}

// Génère les chemins 1.webp, 2.webp ... d'un dossier : gallery('ca2mi', 8)
const gallery = (folder: string, count: number, ext = 'webp'): string[] =>
  Array.from({ length: count }, (_, i) => `assets/images/projects/${folder}/${i + 1}.${ext}`);

// Fonction utilitaire pour sécuriser les chemins contenant des espaces ou parenthèses
const encodePath = (path: string) => encodeURI(path);

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  githubUrl = 'https://github.com/micheloulai93-creator';

  projects: Project[] = [
    {
      title: 'CA2MI',
      category: "Application de gestion d'entreprise",
      impact: "8 modules métier (catalogue, stock, facturation…), rôles et permissions, traçabilité des mouvements et inventaires.",
      tech: ['React', 'Django REST', 'PostgreSQL', 'Git'],
      images: gallery('ca2mi', 4),
      // demoUrl: 'https://...', codeUrl: 'https://github.com/...'
    },
    {
      title: 'Logiciel comptable',
      category: 'Projet universitaire · PME',
      impact: "Logiciel comptable pour PME comportant plus de 5 services fonctionnels.",
      tech: [], 
      images: gallery('compta', 4),
    },
    {
      title: 'SkillSwap',
      category: "Application mobile · Projet d'équipe (5 personnes)",
      impact: "Application mobile de mise en relation par compétences : swipe de profils, matching, messagerie en temps réel et gestion de projets collaboratifs.",
      role: "Chef de projet et architecture : authentification, navigation, gestion d'état, modélisation des données et intégration des modules.",
      tech: ['Flutter', 'Dart', 'Firebase'],
      // Toutes les images listées dans l'ordre de ton dossier
      images: [
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.21 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.21 (2).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.21.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.22 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.22 (2).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.22 (3).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.22 (4).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.22 (5).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.22.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.23 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.23 (2).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.23 (3).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.23 (4).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.23.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.24 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.24 (2).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.24 (3).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.24 (4).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.24.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.25 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.25 (2).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.25 (3).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.25 (4).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.25.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.26 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.15.26.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.17.42 (1).jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.17.42.jpeg'),
        encodePath('assets/images/projects/skillswap/WhatsApp Image 2026-11-10 at 20.17.43.jpeg')
      ],
      // codeUrl: 'https://github.com/...',
    },
  ];

  // Galerie (lightbox)
  openProject = signal<Project | null>(null);
  index = signal(0);

  isClickable(p: Project): boolean {
    return p.images.length > 1 || !!(p.demoUrl || p.codeUrl);
  }

  open(project: Project): void {
    if (project.images.length > 1) {
      this.openProject.set(project);
      this.index.set(0);
      document.body.style.overflow = 'hidden';
    } else {
      const url = project.demoUrl ?? project.codeUrl;
      if (url) window.open(url, '_blank', 'noopener');
    }
  }

  close(): void {
    this.openProject.set(null);
    document.body.style.overflow = '';
  }

  next(): void {
    const p = this.openProject();
    if (!p) return;
    this.index.set((this.index() + 1) % p.images.length);
  }

  prev(): void {
    const p = this.openProject();
    if (!p) return;
    this.index.set((this.index() - 1 + p.images.length) % p.images.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (!this.openProject()) return;
    if (event.key === 'Escape') this.close();
    else if (event.key === 'ArrowRight') this.next();
    else if (event.key === 'ArrowLeft') this.prev();
  }
}