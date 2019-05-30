import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// cargando componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { PelisComponent } from './components/pelis.component';
import { PelisService } from './services/pelis.service';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      PelisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
      appRoutingProviders,
      PelisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
