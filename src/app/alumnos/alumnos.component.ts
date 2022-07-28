import { DataSource } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlumnosServicioService } from '../services/alumnos-servicio.service';
import { AlumnosI } from '../models/alumnos';
import { MatTableDataSource } from '@angular/material/table';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})


export class AlumnosComponent implements OnInit {
listaAlumnos: AlumnosI[] = [];

displayedColumns: string[] = ['id', 'Nombre', 'Apellido', 'Edad', 'acciones'];
dataSource! : MatTableDataSource<any>;


constructor(private _alumnosServicioService: AlumnosServicioService) { }

  ngOnInit(): void {
  this.cargarAlumnos();
}  

cargarAlumnos() {
  this.listaAlumnos = this._alumnosServicioService.getAlumno();
  this.dataSource = new MatTableDataSource(this.listaAlumnos);  
}

  eliminarAlumno(index : number) {
  console.log(index);
  this._alumnosServicioService.eliminarAlumno(index);
  this.cargarAlumnos();
}
}