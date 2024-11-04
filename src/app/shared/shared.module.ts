import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MesasEscrutadasComponent } from './components/mesas-escrutadas/mesas-escrutadas.component';
import { EscrutinioTiempoRealComponent } from './components/escrutinio-tiempo-real/escrutinio-tiempo-real.component';
import { ResultadosParcialesGeneralesComponent } from './components/resultados-parciales-generales/resultados-parciales-generales.component';

@NgModule({
  declarations: [
    MesasEscrutadasComponent,
    EscrutinioTiempoRealComponent,
    ResultadosParcialesGeneralesComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MesasEscrutadasComponent,
    EscrutinioTiempoRealComponent,
    ResultadosParcialesGeneralesComponent,
  ],
})
export class SharedModule {}
