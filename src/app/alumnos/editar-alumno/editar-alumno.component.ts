import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosI } from 'src/app/models/alumnos';
import { AlumnosServicioService } from 'src/app/services/alumnos-servicio.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})

export class EditarAlumnoComponent implements OnInit {
  

  @Input() alumno: AlumnosI | undefined;
  public form: FormGroup;
  @Output() editAlumno = new EventEmitter<AlumnosI>();

  constructor(private fb: FormBuilder, private _alumnosService: AlumnosServicioService, 
    private route: Router) {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      Nombre: ['', [Validators.required, Validators.minLength(1)]],
      Apellido: ['', [Validators.required, Validators.minLength(1)]],
      Edad: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }


editarAlumno() {
  const alumnos: AlumnosI = {
    id: this.form.value.id,
    Nombre: this.form.value.nombre, 
    Apellido: this.form.value.apellido, 
    Edad: this.form.value.edad,
  }
  
  this._alumnosService.editarAlumno(alumnos);
}

}


