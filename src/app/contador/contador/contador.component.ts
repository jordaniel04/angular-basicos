import {Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>

    <h1>La base es: <strong>{{base}}</strong></h1>

    <button (click)="acumular(base);"> + {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base);"> - {{base}}</button>
  `
})
export class ContadorComponent {
    titulo = 'Acumulador App';
    numero = 10;

    base = 5;

    // sumar() {
    //   this.numero +=1
    // }

    // restar() {
    //   this.numero -=1
    // }

    acumular(valor: number){
      this.numero += valor;
    }
 }
