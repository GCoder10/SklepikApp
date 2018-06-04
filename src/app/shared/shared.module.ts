import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { BsDropdownModule, AccordionModule, CollapseModule, RatingModule } from 'ngx-bootstrap';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterCityPipe } from './pipes/filter-city.pipe';
import { FilterPipe } from './pipes/filter.pipe';
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
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
  ],
  declarations: [
    PageNotFoundComponent,
    FilterPipe,
    FilterCityPipe
  ],
  providers: [ AuthGuard, DataService ],
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
    NgxImageGalleryModule,
    HttpClientModule,
    HttpModule
  ]
})


export class SharedModule { }
