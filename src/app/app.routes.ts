import { Routes } from '@angular/router';
import { MainComponent } from '../components/main-component/main-component';
import { DefaultRedirect } from '../components/default-redirect/default-redirect';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: DefaultRedirect },
];
