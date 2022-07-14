import { Injectable } from '@angular/core';
import { alumnos } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServicioService {
  listaAlumnos: alumnos[] = [
    {id: 1, Nombre:'Karen' , Apellido: 'Gutiérrez', Edad: 15 },
  {id: 2, Nombre:'Edith' , Apellido: 'Pérez', Edad: 18 },
  {id: 3, Nombre:'Ramses' , Apellido: 'Hernández', Edad: 17 },
  {id: 4, Nombre:'Luis' , Apellido: 'García', Edad: 15 },
  {id: 5, Nombre:'Josue' , Apellido: 'López', Edad: 16 },
  
  ]

  constructor() { }
  getAlumno(){
    return this.listaAlumnos.slice();
  }
}
