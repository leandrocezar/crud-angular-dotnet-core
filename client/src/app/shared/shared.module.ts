import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolaridadePipe } from './pipes/escolaridade.pipe';



@NgModule({
  declarations: [EscolaridadePipe],
  imports: [
  CommonModule
  ],
  exports: [
    EscolaridadePipe
  ]
})
export class SharedModule { }
