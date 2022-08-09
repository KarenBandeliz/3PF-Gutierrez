import { Injectable } from '@angular/core';
import { AlumnosI } from '../models/alumnos';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServicioService {
urlAPI= 'https://62eb0894ad2954632597b90c.mockapi.io/api/alumnos';

  constructor(private httpClient: HttpClient) {}

  getAlumno(){
    return this.httpClient.get(this.urlAPI);
  }
  
  
  eliminarAlumno(index:number) {
    return this.httpClient.delete(this.urlAPI + 'users/:' + index);
  }

  agregarAlumno(alumno: AlumnosI) {
    return this.httpClient.get(this.urlAPI + alumno);
  }

  editarAlumno (alumno: AlumnosI, id: number){
    return this.httpClient.get(this.urlAPI + alumno);
}
}