import { Component } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';







@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 1000
    }
  ]

  nuevo:Personaje ={
    nombre: 'Maestro  ',
    poder: 90
  }

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
    
  }
}
