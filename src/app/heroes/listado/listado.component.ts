import { Component } from '@angular/core';
import { strict } from 'assert';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

   heroes: string[] = ['Spiderman', 'Superman', 'Adman', 'Capitan America'];

   heroeBorrado: string = '';



  eliminarHero(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  }
  
