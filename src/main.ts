import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  PlusOutline,
  SaveOutline,
  EditOutline,
  EyeOutline,
  ArrowLeftOutline,
} from '@ant-design/icons-angular/icons';

export const icons = [
  PlusOutline,
  SaveOutline,
  EditOutline,
  EyeOutline,
  ArrowLeftOutline,
];

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...appConfig.providers, { provide: NZ_ICONS, useValue: icons }],
});
