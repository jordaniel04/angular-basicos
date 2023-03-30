import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[ //todos los componentes de mi modulo
    HeroeComponent,
    ListadoComponent
  ],
  exports:[ //que cosas quiero hacer públicas
    ListadoComponent
  ],
  imports: [ //solo van modulos
    CommonModule
  ]
})
export class HeroesModule {

}
