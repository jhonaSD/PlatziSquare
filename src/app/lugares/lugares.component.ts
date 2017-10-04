import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'PlatziSquare';
    lugares:any = [
      {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Florería La Gardenía'},
      {plan: 'gratuito', cercania: 2, distancia: 1.8, active: false, nombre: 'Donas La Pasadita'},
      {plan: 'pagado', cercania: 3, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
      {plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Zapatería El Clavo'},
      {plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Juguería DisFruta'}
    ];

    lat:number = 4.6560663;
    lng:number = -74.0595918;
    constructor(){
      
    }
}
