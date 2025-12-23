import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';

export const routes: Routes = [
  // 🔐 AUTH PAGES (NO HEADER / SIDEBAR)
  //   {
  //     path: 'auth',
  //     component: AuthLayoutComponent,
  //     children: [
  //       {
  //         path: 'login',
  //         loadComponent: () =>
  //           import('./features/auth/login.component').then(
  //             (c) => c.LoginComponent
  //           ),
  //       },
  //     ],
  //   },

  // 🌐 PUBLIC PAGES
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          //  import('./layouts/layout/layout.component').then(
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
    ],
  },

  // 🌐 PUBLIC PAGES
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
    ],
  },

  // 🧑‍💼 ADMIN PANEL (PROTECTED)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },

      {
        path: 'employees',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './features/employees/employee-list/employee-list.component'
              ).then((c) => c.EmployeeListComponent),
          },
          //   {
          //     path: 'create',
          //     loadComponent: () =>
          //       import(
          //         './features/employees/employee-create/employee-create.component'
          //       ).then((c) => c.EmployeeCreateComponent),
          //   },
          //   {
          //     path: ':id',
          //     loadComponent: () =>
          //       import(
          //         './features/employees/employee-detail/employee-detail.component'
          //       ).then((c) => c.EmployeeDetailComponent),
          //   },
        ],
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
