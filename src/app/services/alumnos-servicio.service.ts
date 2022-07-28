import { Injectable } from '@angular/core';
import { AlumnosI } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServicioService {
  listaAlumnos: AlumnosI[] = [
  {id: 1, Nombre:'Karen' , Apellido: 'Gutiérrez', Edad: 15 },
  {id: 2, Nombre:'Edith' , Apellido: 'Pérez', Edad: 18 },
  {id: 3, Nombre:'Ramses' , Apellido: 'Hernández', Edad: 17 },
  {id: 4, Nombre:'Luis' , Apellido: 'García', Edad: 15 },
  {id: 5, Nombre:'Omar' , Apellido: 'López', Edad: 16 },
  
  ]

  constructor() { }

  getAlumno(){
    return this.listaAlumnos.slice();
  }

  eliminarAlumno(index : number) {
    this.listaAlumnos.splice(index, 1);
  }

  agregarAlumno(alumno: AlumnosI) {
    this.listaAlumnos.unshift(alumno);
  }

  editarAlumno (alumno: AlumnosI){
    this.listaAlumnos.unshift(alumno);
  }
}
