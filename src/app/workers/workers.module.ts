import { DownloadComponent } from './components/download/download.component';
import { PhotoComponent } from './components/photo/photo.component';
import { WszyscyComponent } from './components/wszyscy/wszyscy.component';
import { DodawanieComponent } from './components/dodawanie/dodawanie.component';
import { ImportComponent } from './components/import/import.component';
import { JsonService } from './shared/services/json.service';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { AllWorkersComponent } from './components/all-workers/all-workers.component';


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
    DownloadComponent,
    AllWorkersComponent
  ],
  providers: [ JsonService ],
  exports: [
    DodawanieComponent,
    WszyscyComponent,
    PhotoComponent,
    ImportComponent,
    DownloadComponent,
    AllWorkersComponent
  ],
})


export class WorkersModule { }
