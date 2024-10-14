import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { PlansComponent } from './pages/plans/plans.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  {
    path:'plans',
    component:PlansComponent
  }

];
