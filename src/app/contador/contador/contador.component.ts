import { Component} from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `

<h1>{{titulo}}</h1>

<button (click)="contador(+1)"> +1</button>

<span> {{ numero }} </span>

<button (click)="contador(-1)"> -1</button>

<hr>

<h1>{{titulo2}}</h1>
<h3>La base es: {{base}}</h3>

<button (click)="acumular( base )"> + {{base}}</button>

<span> {{ numero2 }} </span>

<button (click)="acumular( -base )"> - {{base}}</button>

  `
})
export class ContadorComponent{

  public titulo: string = 'Contador App';
  public titulo2: string = 'Base App';



  numero: number = 10;
  numero2: number = 10;
  base  : number = 5;


  contador(valor: number){
   this.numero += valor;
 }

 acumular(valor2: number){
   this.numero2 += valor2;
 }
}
