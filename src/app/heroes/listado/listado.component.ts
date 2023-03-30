import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Hulk', 'Spiderman', 'Thor'];
  heroeBorrado: string[] = [];

  mostrarBorrado(): boolean{
    return this.heroeBorrado.length > 0;
  }

  borrarHeroe(){
    const borrado = this.heroes.shift() || '';
    borrado !== '' && this.heroeBorrado.push(borrado);

    console.log("borrando...");
    console.log(this.heroeBorrado);

  }
}
