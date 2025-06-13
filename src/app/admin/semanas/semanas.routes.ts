import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { NuevoTrabajoComponent } from './nuevo-trabajo/nuevo-trabajo.component';
import { ListadoSemanasComponent } from './listado-semanas/listado-semanas.component';
export const ATRIBUTOS_ROUTE: Route[] = [
  {
    path: 'listado-semanas',
    component: ListadoSemanasComponent,
  },
  {
    path: 'nuevo-trabajo/:id',
    component: NuevoTrabajoComponent,
  },
  { path: '**', component: Page404Component },
];
