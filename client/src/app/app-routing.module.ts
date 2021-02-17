import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteComponent } from './components/cliente/cliente.component';
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
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent,
    children: [
      { path: 'edit/:id', component: ClienteFormComponent },
      { path: 'add', component: ClienteFormComponent },
      { path: '', component: ClienteListComponent },
    ]
  },
  {
    path: 'motoristas',
    component: ClienteComponent,
    children: [
      { path: 'edit/:id', component: ClienteFormComponent },
      { path: 'add', component: ClienteFormComponent },
      { path: '', component: ClienteListComponent },
    ]
  },
  {
    path: 'veiculos',
    component: ClienteComponent,
    children: [
      { path: 'edit/:id', component: ClienteFormComponent },
      { path: 'add', component: ClienteFormComponent },
      { path: '', component: ClienteListComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
