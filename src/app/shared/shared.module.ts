import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { BsDropdownModule, AccordionModule, CollapseModule, RatingModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterCityPipe } from './pipes/filter-city.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageGalleryModule,
    HttpClientModule,
    HttpModule,
    OrderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy-w-fFKYIBSOXIxBLVzA7YcrlOl-lxxw',
      libraries: ['places']
    })
  ],
  declarations: [
    PageNotFoundComponent,
    FilterPipe,
    FilterCityPipe
  ],
  providers: [ AuthGuard, DataService, UserService ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    FilterPipe,
    FilterCityPipe,
    BsDropdownModule,
    AccordionModule,
    CollapseModule,
    RatingModule,
    AgmCoreModule,
    AngularFireModule,
    AngularFireAuthModule,
    NgxImageGalleryModule,
    HttpClientModule,
    HttpModule,
    OrderModule
  ]
})


export class SharedModule { }
