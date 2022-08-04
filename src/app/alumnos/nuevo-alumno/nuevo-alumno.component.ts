import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosI } from '../../models/alumnos';
import { AlumnosServicioService } from '../../services/alumnos-servicio.service';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.scss']
})
export class NuevoAlumnoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _alumnosService: AlumnosServicioService, 
    private route: Router) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarAlumno() {
    const alumnos: AlumnosI = {
      id: this.form.value.id,
      nombre: this.form.value.nombre, 
      apellido: this.form.value.apellido, 
      edad: this.form.value.edad,
    }
    
    this._alumnosService.agregarAlumno(alumnos);
  }

}
