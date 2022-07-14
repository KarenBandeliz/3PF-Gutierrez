import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { alumnos, alumno } from 'src/app/models/alumnos';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss']
})
export class AgregarAlumnoComponent implements OnInit {

  AgregarAlumnos: alumnos;

  constructor(private fb: FormBuilder) {
    this.AgregarAlumnos = new alumno();
  }

  formNewStudent = this.fb.group({
    Nombre: ['', [Validators.required, Validators.minLength(3)]],
    Apellido: ['', [Validators.required, Validators.minLength(4)]],
    Edad: ['', [Validators.required]
  });

  ngOnInit(): void {
  }

  submit() {
    console.log(this.AgregarAlumnos);
  }

}
