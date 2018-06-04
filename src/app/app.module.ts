import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomePageComponents/home/home.component';
import { Home2Component } from './HomePageComponents/home2/home2.component';
import { Home3Component } from './HomePageComponents/home3/home3.component';
import { ONasComponent } from './HeadersComponents/HeadersFeatures/o-nas/o-nas.component';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RulesComponent } from './FootersComponents/FootersFeatures/rules/rules.component';
import { PracaComponent } from './FootersComponents/FootersFeatures/praca/praca.component';
import { LokalizacjaComponent } from './FootersComponents/FootersFeatures/lokalizacja/lokalizacja.component';
import { GaleriaBiuraComponent } from './FootersComponents/FootersFeatures/galeria-biura/galeria-biura.component';
import { PytaniaComponent } from './FootersComponents/FootersFeatures/pytania/pytania.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    Home3Component,
    ONasComponent,
    RulesComponent,
    PracaComponent,
    LokalizacjaComponent,
    GaleriaBiuraComponent,
    PytaniaComponent
  ],
  imports: [
    AppRoutingModule,
    StoreModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy-w-fFKYIBSOXIxBLVzA7YcrlOl-lxxw',
      libraries: ['places']
    }),
    SharedModule,
    AuthModule,
    WorkersModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
