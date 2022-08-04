import { DataSource } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlumnosServicioService } from '../services/alumnos-servicio.service';
import { AlumnosI } from '../models/alumnos';
import { MatTableDataSource } from '@angular/material/table';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})


export class AlumnosComponent implements OnInit {
alumnos: AlumnosI[] = [];

constructor(private _alumnosServicioService: AlumnosServicioService) { }

  ngOnInit() {
    this._alumnosServicioService.getAlumno();
}  

cargarAlumnos() {
    this._alumnosServicioService.getAlumno().subscribe((data: AlumnosI) => {
      this.alumnos = data;

})
}

  eliminarAlumno(id : number) {
  console.log(id);
    this._alumnosServicioService.getAlumno().subscribe((id) => {
    this.alumnos(id);
  this.cargarAlumnos();
})
}
}
