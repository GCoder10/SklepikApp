import { DownloadComponent } from './components/download/download.component';
import { PhotoComponent } from './components/photo/photo.component';
import { WszyscyComponent } from './components/wszyscy/wszyscy.component';
import { DodawanieComponent } from './components/dodawanie/dodawanie.component';
import { ImportComponent } from './components/import/import.component';
import { JsonService } from './shared/services/json.service';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    DodawanieComponent,
    WszyscyComponent,
    PhotoComponent,
    ImportComponent,
    DownloadComponent
  ],
  providers: [ JsonService ],
  exports: [
    DodawanieComponent,
    WszyscyComponent,
    PhotoComponent,
    ImportComponent,
    DownloadComponent
  ],
})


export class WorkersModule { }
