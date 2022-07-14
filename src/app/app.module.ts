import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import {MatTableModule} from '@angular/material/table';
import { FormGroup, FormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    EditarAlumnoComponent,
    AgregarAlumnoComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatTooltipModule,
    MatSortModule
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatTooltipModule,
    MatSortModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
