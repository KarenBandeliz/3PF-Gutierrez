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

  @Input() alumnos: Array<AlumnosI> = [];

constructor(private _alumnosServicioService: AlumnosServicioService) { }

  ngOnInit() {

  this._alumnosServicioService.getAlumno().subscribe(AlumnosI => {
    console.log(AlumnosI);
    this.alumnos = Object.assign([], AlumnosI);
  })
}

  eliminarAlumno(index: number) {
    console.log(index);
  this._alumnosServicioService.eliminarAlumno(index).subscribe((index => {
    this.alumnos = Object.assign([], index);

})
}
