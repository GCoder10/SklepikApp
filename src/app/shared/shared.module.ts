import { MessagesResolver } from './resolvers/messages.resolver';
import { ListsResolver } from './resolvers/lists.resolver';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';
import { WorkerEditResolver } from './resolvers/worker-edit.resolver';
import { WorkerListResolver } from './resolvers/worker-list.resolver';
import { WorkerDetailResolver } from './resolvers/worker-detail.resolver';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NgxGalleryModule } from 'ngx-gallery';
// tslint:disable-next-line:max-line-length
import { BsDropdownModule, AccordionModule, CollapseModule, RatingModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterCityPipe } from './pipes/filter-city.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageGalleryModule,
    NgxGalleryModule,
    HttpClientModule,
    HttpModule,
    OrderModule,
    FileUploadModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    RatingModule.forRoot(),
    ButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy-w-fFKYIBSOXIxBLVzA7YcrlOl-lxxw',
      libraries: ['places']
    })
  ],
  declarations: [
    PageNotFoundComponent,
    FilterPipe,
    FilterCityPipe,
    TimeAgoPipe
  ],
  providers: [
    AuthGuard,
    PreventUnsavedChanges,
    DataService,
    UserService,
    WorkerDetailResolver,
    WorkerListResolver,
    WorkerEditResolver,
    ListsResolver,
    MessagesResolver
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    FilterPipe,
    FilterCityPipe,
    TimeAgoPipe,
    BsDropdownModule,
    BsDatepickerModule,
    AccordionModule,
    CollapseModule,
    ButtonsModule,
    RatingModule,
    PaginationModule,
    AgmCoreModule,
    FileUploadModule,
    AngularFireModule,
    AngularFireAuthModule,
    NgxImageGalleryModule,
    NgxGalleryModule,
    HttpClientModule,
    HttpModule,
    OrderModule,
    TabsModule
  ]
})


export class SharedModule { }
