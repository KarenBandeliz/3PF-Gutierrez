import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AlumnosComponent } from "./alumnos.component";
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';

const routes: Routes = [

    { path: '', component: AlumnosComponent, children: [
        { path: 'nuevo-alumno', component:  NuevoAlumnoComponent}, 
        { path: 'editar-alumno', component: EditarAlumnoComponent},
        { path: 'editar-alumno', component: EditarAlumnoComponent}
        

    ]}
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlumnosRoutingModule { }