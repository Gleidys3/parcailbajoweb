import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import{EstudianteService}from'./services/estudiante.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EstudianteConsultaComponent } from './parcialnotas/estudiante-consulta/estudiante-consulta.component';
import { EstudianteRegistroComponent } from './parcialnotas/estudiante-registro/estudiante-registro.component';
import { EstudianteModificarComponent } from './parcialnotas/estudiante-modificar/estudiante-modificar.component';
import { EstudianteEliminarComponent } from './parcialnotas/estudiante-eliminar/estudiante-eliminar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EstudianteConsultaComponent,
    EstudianteRegistroComponent,
    EstudianteModificarComponent,
    EstudianteEliminarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
