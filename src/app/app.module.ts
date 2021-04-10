import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavsideComponent } from './componentes/navside/navside.component';
import { MainComponent } from './componentes/main/main.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormContactComponent } from './componentes/form-contact/form-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsideComponent,
    MainComponent,
    SobreMiComponent,
    HerramientasComponent,
    ProyectosComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
