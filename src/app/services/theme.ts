import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('dark');

  /** À appeler une fois, quand la page est affichée. */
  init(): void {
    let saved: string | null = null;
    try { saved = localStorage.getItem('theme'); } catch { /* stockage indisponible */ }
    this.apply(saved === 'light' ? 'light' : 'dark', false);
  }

  toggle(): void {
    this.apply(this.theme() === 'dark' ? 'light' : 'dark', true);
  }

  private apply(t: Theme, save: boolean): void {
    this.theme.set(t);

    const link = document.getElementById('optional-theme') as HTMLLinkElement | null;
    if (link) link.href = `assets/css/${t}.theme.css`;
    document.documentElement.setAttribute('data-theme', t);

    if (save) {
      try { localStorage.setItem('theme', t); } catch { /* ignoré */ }
    }
    this.updateParticles(t);
  }

  // Le fond de particules a deux configurations (sombre / clair)
  private updateParticles(t: Theme): void {
    const el = document.getElementById('particlebackground');
    if (!el) return;
    const config = t === 'light' ? './assets/pj-config-light.json' : './assets/pj-config.json';
    el.setAttribute('data-config', config);

    const w = window as any;
    try {
      if (w.particlesJS && w.pJSDom?.length) {
        w.pJSDom[0].pJS.fn.vendors.destroypJS();
        w.pJSDom = [];
        w.particlesJS.load('particlebackground', config, () => {});
      }
    } catch { /* le fond est décoratif : on ignore les erreurs */ }
  }
}
