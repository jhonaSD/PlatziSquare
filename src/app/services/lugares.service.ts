import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService{
    lugares:any = [
        {id: 1,plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Florería La Gardenía'},
        {id: 2,plan: 'gratuito', cercania: 2, distancia: 1.8, active: false, nombre: 'Donas La Pasadita'},
        {id: 3,plan: 'pagado', cercania: 3, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
        {id: 4,plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Zapatería El Clavo'},
        {id: 5,plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Juguería DisFruta'},
        {id: 6,plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Juguería DisFruta'}
      ];

      public getLugares(){
          return this.lugares;
      }

      public buscarLugar(id){
        return this.lugares.filter((lugar)=>{ return lugar.id == id})[0] || null;
      }
}