import { PytaniaComponent } from './pytania/pytania.component';
import { RulesComponent } from './rules/rules.component';
import { PracaComponent } from './praca/praca.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { LokalizacjaComponent } from './lokalizacja/lokalizacja.component';
import { GaleriaBiuraComponent } from './galeria-biura/galeria-biura.component';
import { Home3Component } from './HomePageComponents/home3/home3.component';
import { Home2Component } from './HomePageComponents/home2/home2.component';
import { HomeComponent } from './HomePageComponents/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    Home2Component,
    Home3Component,
    GaleriaBiuraComponent,
    LokalizacjaComponent,
    ONasComponent,
    PracaComponent,
    RulesComponent,
    PytaniaComponent
  ],
  exports: [
    HomeComponent,
    Home2Component,
    Home3Component,
    GaleriaBiuraComponent,
    LokalizacjaComponent,
    ONasComponent,
    PracaComponent,
    RulesComponent,
    PytaniaComponent
  ]
})


export class ComponentsModule { }
