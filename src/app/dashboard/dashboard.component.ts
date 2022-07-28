import { Component, OnInit, ViewChild, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosI } from 'src/app/models/alumnos';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @Input() alumno: AlumnosI | undefined;
  public formulario: FormGroup;
  @Output() editAlumno = new EventEmitter < AlumnosI >();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      edad: ['', [Validators.required, Validators.min(10)]]
    })
  }

  ngOnInit(): void {

  }

  editarAlumno(alumno: AlumnosI ) {
    console.log(this.formulario.get('nombre')?.errors);
    if (this.formulario.get('nombre')?.errors === null && this.formulario.get('apellido')?.errors === null && this.formulario.get('edad')?.errors === null) {
      let nuevoAlumno = this.formulario.value;
      nuevoAlumno.id = this.alumno?.id;
      this.editAlumno.emit(nuevoAlumno);
      this.formulario.reset();
    }
    else {
      console.log('Invalido');

    }
  }
}
