import { Routes } from '@angular/router';

export const ADMIN_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../../features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  //   {
  //     path: 'employees',
  //     loadChildren: () =>
  //       import('../../features/employees/employees.routes').then(
  //         (r) => r.EMPLOYEE_ROUTES
  //       ),
  //   },
  {
    path: 'settings',
    loadComponent: () =>
      import('../../features/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
  },
];
