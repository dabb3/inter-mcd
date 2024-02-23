import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css'],
})

export class InterComponent {
  currentTime: string;
  clockInterval: any;
  name: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.startClock('America/New_York');
    this.currentTime = '';
    this.name = '';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language === 'en') {
      this.startClock('America/New_York');
    } else if (language === 'fr') {
      this.startClock('Europe/Paris');
    } else if (language === 'de') {
      this.startClock('Europe/Berlin');
    }
  }

  getCurrentTime(timezone: string) {
    return moment().tz(timezone).format('HH:mm:ss');
  }

  startClock(timezone: string) {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
    this.clockInterval = setInterval(() => {
      this.currentTime = this.getCurrentTime(timezone);
    }, 1000);
  }
}
