import { DataSource } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { alumnos } from '../models/alumnos';
import { AlumnosServicioService } from '../services/alumnos-servicio.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})

export class AlumnosComponent implements OnInit {

  listaAlumnos: alumnos[] = [
    {id: 1, Nombre:'Karen' , Apellido: 'Gutiérrez', Edad: 15 },
    {id: 2, Nombre:'Edith' , Apellido: 'Pérez', Edad: 18 },
    {id: 3, Nombre:'Ramses' , Apellido: 'Hernández', Edad: 17 },
    {id: 4, Nombre:'Luis' , Apellido: 'García', Edad: 15 },
    {id: 5, Nombre:'Josue' , Apellido: 'López', Edad: 16 },
  ];

    displayedColumns: string[] = ['id', 'Nombre', 'Apellido', 'Edad', 'acciones'];


    @ViewChild(MatSort) sort!: MatSort;

    constructor(private AlumnosServicioService: AlumnosServicioService) {}
   ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(){
    this.listaAlumnos = this.AlumnosServicioService.getAlumno();
    
  }

  eliminarAlumno(){
    this.listaAlumnos = this.AlumnosServicioService.getAlumno();

    
  }
}
