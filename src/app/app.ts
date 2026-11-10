import { AfterViewInit, Component, inject } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Stats } from './components/stats/stats';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';
import { Experiences } from './components/experiences/experiences';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { ScriptLoader } from './services/script-loader';
import { ThemeService } from './services/theme';
import { SOCIALS } from './data/socials';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, About, Stats, Skills, Portfolio, Experiences, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  title = 'IIT-Portfolio';
  private loader = inject(ScriptLoader);
  private theme = inject(ThemeService);

  whatsapp =
    (SOCIALS.find(s => s.name === 'WhatsApp')?.url ?? '#') +
    '?text=' + encodeURIComponent('Bonjour Michel, j’ai vu votre portfolio et je souhaite échanger avec vous.');

  ngAfterViewInit() {
    this.theme.init();
    this.loader.loadTemplateScripts();
  }
}
