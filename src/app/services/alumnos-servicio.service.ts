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

  getAlumno():Observable<AlumnosI>{
    return this.httpClient.get<AlumnosI>(this.urlAPI + 'users');
  }
  
  eliminarAlumno(id:number) {
    return this.httpClient.delete(this.urlAPI + 'users/:' + id);
  }

  agregarAlumno(alumno: AlumnosI) {
    return this.httpClient.post<AlumnosI>(this.urlAPI, alumno);
  }

  editarAlumno (alumno: AlumnosI, id: number){
    return this.httpClient.put<AlumnosI>(this.urlAPI + id, alumno);
}
}