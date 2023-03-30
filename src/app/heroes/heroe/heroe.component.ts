import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre = 'Iroman';
  edad = 45;

  // crear mediante codigo una propiedad que cuando se llame va a ser procesada
  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }


  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(){
    this.nombre = 'Spiderman';
  }

  cambiarEdad(){
    this.edad = 30;
  }
}
