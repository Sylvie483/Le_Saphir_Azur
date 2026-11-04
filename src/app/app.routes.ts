import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Accommodations } from './accommodations/accommodations';
import { Services } from './services/services';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'accommodations', component: Accommodations },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
