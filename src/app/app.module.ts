import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directivies/resaltar.directive';
import { ContarClicksDirective } from './directivies/contar-clicks.directive';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {CrearComponent} from './crear/crear.component';
import {LugaresService} from './services/lugares.service';
import {Routes, RouterModule, RouterLink} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {HttpModule} from '@angular/http';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';

const appRoutes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyBfyeCVLCyEsvLStKim6nJSpCKqhILD3ms",
  authDomain: "platzisquare-1506913279050.firebaseapp.com",
  databaseURL: "https://platzisquare-1506913279050.firebaseio.com",
  storageBucket: "platzisquare-1506913279050.appspot.com",
  messagingSenderId: "752406191373"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOd5gQtI16EiXggk_2K1laX97JNt7Rrc4'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
