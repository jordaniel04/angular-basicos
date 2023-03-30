import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';
@NgModule({
  declarations:[ //todos los componentes de mi modulo
    ContadorComponent
  ],
  exports:[ //que cosas quiero hacer públicas
    ContadorComponent
  ],
  imports: [ //solo van modulos
    
  ]
})
export class ContadorModule {}
