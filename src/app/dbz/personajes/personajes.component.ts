import { Component, Input } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
@Input() personajes: Personaje [] = [];



}
