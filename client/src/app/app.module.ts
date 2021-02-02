import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent,
    ClienteListComponent,
    ClienteFormComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GamesService, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
