import { Component, signal } from '@angular/core';
import { CONTACT_ENDPOINT } from '../../data/config';

interface Info {
  icon: string;
  title: string;
  text: string;
  href?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  email = 'micheloulai93@gmail.com';

  infos: Info[] = [
    { icon: 'mbri-letter', title: 'E-mail', text: this.email, href: 'mailto:' + this.email },
    { icon: 'mbri-mobile', title: 'Téléphone', text: '01 73 46 67 22', href: 'tel:+2250173466722' },
    { icon: 'mbri-map-pin', title: 'Adresse', text: "Grand-Bassam, Côte d'Ivoire" },
  ];

  status = signal<Status>('idle');

  async send(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    if (data.get('_gotcha')) return; // champ piège : anti-spam

    // Sans lien Formspree : on ouvre l'application e-mail
    if (!CONTACT_ENDPOINT) {
      const body = `${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`;
      window.location.href =
        `mailto:${this.email}?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(body)}`;
      return;
    }

    this.status.set('sending');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        form.querySelectorAll('.form-focused').forEach(el => el.classList.remove('form-focused'));
        this.status.set('success');
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }
}
