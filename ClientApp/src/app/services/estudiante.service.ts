import { Injectable } from '@angular/core';
import { Estudiante } from './../parcialnotas/models/estudiante';



@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  estudiante:Estudiante;
  constructor(private estudianteService:EstudianteService) { }
  get(): Estudiante[] {
    return JSON.parse(localStorage.getItem('datos'));
    }
    post(estudiante: Estudiante) {
      let estudiantes: Estudiante[] = [];
      if (this.get() != null) {
      estudiantes = this.get();
      }
      estudiantes.push(estudiante);
      localStorage.setItem('datos', JSON.stringify(estudiantes));
      }
      }
    

