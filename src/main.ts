import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';

registerLocaleData(ru);

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...appConfig.providers, { provide: NZ_I18N, useValue: ru_RU }],
});
