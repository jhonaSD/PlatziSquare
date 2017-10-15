import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
    title = 'PlatziSquare';

    lat:number = -11.9981954;
    lng:number = -77.1052643;
    lugares = null;
    error:any = {
      estado: false,
      mensaje: null
    };
    constructor(private lugarService:LugaresService){
        lugarService.getLugares()
          .subscribe((lugares)=>{
            this.lugares = lugares;
            this.lugares = Object.keys(this.lugares).map((key)=>{
              return this.lugares[key];
            })
          }, error=>{
            console.log(error);
            //alert('Tenemos algo de dificultades, disculpe las molestias. Error: ' + error.statusText);
            this.error.estado = true;
            this.error.mensaje = error.statusText;
          })
    }
}
