import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PanelComponent]
})
export class SharedModule { }

