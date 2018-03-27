import { DownloadComponent } from './HeadersComponents/HeadersFeatures/download/download.component';
import { CityComponent } from './HeadersComponents/HeadersFeatures/city/city.component';
import { PhotoComponent } from './HeadersComponents/HeadersFeatures/photo/photo.component';
import { WszyscyComponent } from './HeadersComponents/HeadersFeatures/wszyscy/wszyscy.component';
import { PobieranieComponent } from './HeadersComponents/HeadersFeatures/pobieranie/pobieranie.component';
import { DodawanieComponent } from './HeadersComponents/HeadersFeatures/dodawanie/dodawanie.component';
import { PytaniaComponent } from './FootersComponents/FootersFeatures/pytania/pytania.component';
import { GaleriaBiuraComponent } from './FootersComponents/FootersFeatures/galeria-biura/galeria-biura.component';
import { LokalizacjaComponent } from './FootersComponents/FootersFeatures/lokalizacja/lokalizacja.component';
import { PracaComponent } from './FootersComponents/FootersFeatures/praca/praca.component';
import { RulesComponent } from './FootersComponents/FootersFeatures/rules/rules.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './HomePageComponents/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ONasComponent } from './HeadersComponents/HeadersFeatures/o-nas/o-nas.component';
import { StartComponent } from './auth/start/start.component';
import { EndComponent } from './auth/end/end.component';
import { ImportComponent } from './HeadersComponents/HeadersFeatures/import/import.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logowanie', component: SigninComponent },
  { path: 'rejestracja', component: SignupComponent },
  { path: 'oNas', component: ONasComponent },
  { path: 'end', component: EndComponent },
  { path: 'start', component: StartComponent },
  { path: 'regulamin', component: RulesComponent },
  { path: 'pytania', component: PytaniaComponent },
  { path: 'praca', component: PracaComponent },
  { path: 'pobieranie', component: PobieranieComponent },
  { path: 'wszyscy', component: WszyscyComponent },
  { path: 'dodawanie', component: DodawanieComponent },
  { path: 'city', component: CityComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'import', component: ImportComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'biura', component: GaleriaBiuraComponent },
  { path: 'lokalizacja', component: LokalizacjaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
