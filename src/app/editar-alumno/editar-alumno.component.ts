import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {

  @Input() alumno: alumnos | undefined;
  public formulario: FormGroup;
  @Output() editAlumno = new EventEmitter<alumnos>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      Apellido: ['', [Validators.required, Validators.minLength(4)]],
      Edad: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  editarAlumno(alumno: alumnos) {
    if (this.formulario.get('Nombre')?.errors === null && this.formulario.get('Apellido')?.errors === null && this.formulario.get('Edad')?.errors === null) {
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