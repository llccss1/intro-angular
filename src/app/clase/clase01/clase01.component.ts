import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase01',
  templateUrl: './clase01.component.html',
  styleUrls: ['./clase01.component.scss']
})
export class Clase01Component implements OnInit {
  hero = 'Windstorm';
  frutas : Array<string | number>= ['banana',15,'limon'];
  numero = 1000;
  persona : Persona = {nombre: 'Lucas', apellido: 'Quintana'};
  
  constructor() { }

  ngOnInit(): void {
    //this.numero = ''
  }

  obtenerFrutas() { }
}

interface Persona {
  nombre: string;
  apellido: string;
}