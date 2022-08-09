
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.scss']
})
export class DetallesAlumnoComponent implements OnInit {

  constructor(private router :Router) { }


  ngOnInit(): void {
  }
  Btn(){


  this.router.navigate(['/alumnos/'])
}
}
