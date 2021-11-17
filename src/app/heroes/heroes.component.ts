import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  frutas = ['banana','pera','limon'];
  numero = 1000;
  persona = {nombre: 'Lucas', apellido: 'Quintana'};
  
  constructor() { }

  ngOnInit(): void {
  }

  obtenerFrutas() { }
}
