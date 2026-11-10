import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScriptLoader {
  private files = [
    'jquery.js', 'popper.min.js', 'bootstrap.min.js', 'jquery.easing.min.js',
    'jquery.appear.min.js', 'jquery.countTo.js', 'scrollspy.js',
    'jquery.magnific-popup.min.js', 'owl.carousel.min.js', 'aos.js',
    'typed.min.js', 'particles.min.js', 'alert.js', 'contact.js', 'custom.js',
  ];
  private started = false;

  async loadTemplateScripts(): Promise<void> {
    if (this.started) return;
    this.started = true;
    for (const f of this.files) {
      await this.load('assets/js/' + f);
    }
    if (document.readyState === 'complete') {
      window.dispatchEvent(new Event('load'));
    }
  }

  private load(src: string): Promise<void> {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = () => resolve();
      s.onerror = () => { console.error('Script introuvable :', src); resolve(); };
      document.body.appendChild(s);
    });
  }
}