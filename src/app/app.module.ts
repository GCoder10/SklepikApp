import { AuthGuard } from './guards/auth.guard';
import { JsonService } from './json/json.service';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './HeadersComponents/header/header.component';
import { HomeComponent } from './HomePageComponents/home/home.component';
import { HeaderafterloginComponent } from './HeadersComponents/headerafterlogin/headerafterlogin.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { Home2Component } from './HomePageComponents/home2/home2.component';
import { Home3Component } from './HomePageComponents/home3/home3.component';
import { FooterComponent } from './FootersComponents/footer/footer.component';
import { Footer2Component } from './FootersComponents/footer2/footer2.component';
import { Footer3Component } from './FootersComponents/footer3/footer3.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ONasComponent } from './HeadersComponents/HeadersFeatures/o-nas/o-nas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { DataService } from './data/data.service';
import { StartComponent } from './auth/start/start.component';
import { EndComponent } from './auth/end/end.component';
import { HeaderloggedComponent } from './HeadersComponents/headerlogged/headerlogged.component';
import { RulesComponent } from './FootersComponents/FootersFeatures/rules/rules.component';
import { PracaComponent } from './FootersComponents/FootersFeatures/praca/praca.component';
import { LokalizacjaComponent } from './FootersComponents/FootersFeatures/lokalizacja/lokalizacja.component';
import { GaleriaBiuraComponent } from './FootersComponents/FootersFeatures/galeria-biura/galeria-biura.component';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { PytaniaComponent } from './FootersComponents/FootersFeatures/pytania/pytania.component';
import { DodawanieComponent } from './HeadersComponents/HeadersFeatures/dodawanie/dodawanie.component';
import { HttpClientModule } from '@angular/common/http';
import { PobieranieComponent } from './HeadersComponents/HeadersFeatures/pobieranie/pobieranie.component';
import { WszyscyComponent } from './HeadersComponents/HeadersFeatures/wszyscy/wszyscy.component';
import { PhotoComponent } from './HeadersComponents/HeadersFeatures/photo/photo.component';
import { CityComponent } from './HeadersComponents/HeadersFeatures/city/city.component';
import { ImportComponent } from './HeadersComponents/HeadersFeatures/import/import.component';
import { HttpModule } from '@angular/http';
import { DownloadComponent } from './HeadersComponents/HeadersFeatures/download/download.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderafterloginComponent,
    PageNotFoundComponent,
    Home2Component,
    Home3Component,
    FooterComponent,
    Footer2Component,
    Footer3Component,
    SigninComponent,
    SignupComponent,
    ONasComponent,
    StartComponent,
    EndComponent,
    HeaderloggedComponent,
    RulesComponent,
    PracaComponent,
    LokalizacjaComponent,
    GaleriaBiuraComponent,
    PytaniaComponent,
    DodawanieComponent,
    PobieranieComponent,
    WszyscyComponent,
    PhotoComponent,
    CityComponent,
    ImportComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    StoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy-w-fFKYIBSOXIxBLVzA7YcrlOl-lxxw',
      libraries: ['places']
    }),
    NgxImageGalleryModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService, DataService, JsonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
