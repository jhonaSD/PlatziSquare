import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LugaresService{
    API_ENDPOINT = 'https://platzisquare-1506913279050.firebaseio.com';
    lugares:any = [
        {id: 1,plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Florería La Gardenía'},
        {id: 2,plan: 'gratuito', cercania: 2, distancia: 1.8, active: false, nombre: 'Donas La Pasadita'},
        {id: 3,plan: 'pagado', cercania: 3, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
        {id: 4,plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Zapatería El Clavo'},
        {id: 5,plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Juguería DisFruta'},
        {id: 6,plan: 'gratuito', cercania: 2, distancia: 10, active: true, nombre: 'Juguería DisFruta'}
      ];

      constructor(private afDB:AngularFireDatabase, private http:Http){}

      public getLugares(){
          return this.afDB.list('lugares');
      }

      public buscarLugar(id){
        return this.lugares.filter((lugar)=>{ return lugar.id == id})[0] || null;
      }

      public guardarLugar(lugar){
        //Agrega record a firebase
        //En lugares y el nodo 1
        //this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
        const headers = new Headers({"Content-Type": "application/json"});
        return this.http.post(`${this.API_ENDPOINT}/lugares.json`, lugar, {headers:headers}).subscribe();
      }

      public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`);
      }

      public getLugar(id){
        return this.afDB.object(`lugares/${id}`);
      }

      public editarLugar(lugar){
        this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
      }
}