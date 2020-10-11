import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteConsultaComponent } from './parcialnotas/estudiante-consulta/estudiante-consulta.component';
import { EstudianteRegistroComponent } from './parcialnotas/estudiante-registro/estudiante-registro.component';
import { EstudianteModificarComponent } from './parcialnotas/estudiante-modificar/estudiante-modificar.component';
import { EstudianteEliminarComponent } from './parcialnotas/estudiante-eliminar/estudiante-eliminar.component';

const routes: Routes = [
  {
  path: 'estudianteConsulta',
  component: EstudianteConsultaComponent
  },
  {
  path: 'estudianteRegistro',
  component: EstudianteRegistroComponent
   },
   {
    path: 'estudianteModificar',
    component: EstudianteModificarComponent
     },
     {
      path: 'estudianteEliminar',
      component: EstudianteEliminarComponent
       },
    ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
