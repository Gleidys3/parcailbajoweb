import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'app-estudiante-consulta',
  templateUrl: './estudiante-consulta.component.html',
  styleUrls: ['./estudiante-consulta.component.css']
})
export class EstudianteConsultaComponent implements OnInit {
estudiante:Estudiante[];
  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
  }
get(){
  this.estudiante= this.estudianteService.get();
}
}
