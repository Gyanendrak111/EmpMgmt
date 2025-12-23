import { Routes } from '@angular/router';

export const PUBLIC_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
];
