import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.page').then((m) => m.MainPage),
  },
  {
    path: 'product-list',
    loadComponent: () =>
      import('./pages/product-list/product-list.page').then(
        (m) => m.ProductListPage
      ),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
