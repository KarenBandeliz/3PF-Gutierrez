import { Component, OnInit, ViewChild, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { alumnos } from 'src/app/models/alumnos';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @Input() alumno: alumnos | undefined;
  public formulario: FormGroup;
  @Output() editAlumno = new EventEmitter < alumnos >();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      edad: ['', [Validators.required, Validators.min(10)]]
    })
  }

  ngOnInit(): void {

  }

  editarAlumno(alumno: alumnos ) {
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
