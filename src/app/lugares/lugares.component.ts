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
    constructor(private lugarService:LugaresService){
      this.lugares = lugarService.getLugares();
    }
}
