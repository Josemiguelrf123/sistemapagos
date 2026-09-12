import { Route } from '@angular/router';

import {
  canActivate,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

export const ADMIN_ROUTE: Route[] = [

  {
    path: 'semanas',
    loadChildren: () =>
      import('./semanas/semanas.routes').then(
        (m) => m.ATRIBUTOS_ROUTE
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },

  {
    path: 'imagenes',
    loadChildren: () =>
      import('./imagenes/imagenes.routes').then(
        (m) => m.IMAGENES_ROUTE
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },

  {
    path: 'gastos',
    loadChildren: () =>
      import('./gastos/gastos.routes').then(
        (m) => m.GASTOS_ROUTE
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },

];
