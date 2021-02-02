import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path:'games/add',
    component: GameFormComponent
  },
  {
    path:'games/edit/:id',
    component: GameFormComponent
  },
  {
    path:'clientes',
    component: ClienteListComponent
  },
  {
    path:'clientes/add',
    component: ClienteFormComponent
  },
  {
    path:'clientes/edit:/id',
    component: ClienteFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
