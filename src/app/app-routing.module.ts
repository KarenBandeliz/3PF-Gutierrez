import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { EditarAlumnoComponent } from './alumnos/editar-alumno/editar-alumno.component';
import { NuevoAlumnoComponent } from './alumnos/nuevo-alumno/nuevo-alumno.component';

const routes: Routes = [
  { path: '', component: AlumnosComponent, children: [
    { path: 'editar-alumno', component: EditarAlumnoComponent},
    { path: 'nuevo-alumno', component: NuevoAlumnoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
