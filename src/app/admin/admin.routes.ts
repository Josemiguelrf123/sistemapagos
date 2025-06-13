import { Route } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
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
  }
];
