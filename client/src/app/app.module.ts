import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamesService } from './services/games.service';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { ClientesService } from './services/clientes.service';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { PhonePipe } from './pipes/mask/phone.pipe';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MotoristaFormComponent } from './components/motorista/motorista-form/motorista-form.component';
import { VeiculoFormComponent } from './components/veiculo/veiculo-form/veiculo-form.component';
import { MotoristaListComponent } from './components/motorista/motorista-list/motorista-list.component';
import { VeiculoListComponent } from './components/veiculo/veiculo-list/veiculo-list.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    ClienteListComponent,
    ClienteFormComponent,
    PhonePipe,
    ClienteComponent,
    MotoristaFormComponent,
    VeiculoFormComponent,
    MotoristaListComponent,
    VeiculoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [GamesService, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
