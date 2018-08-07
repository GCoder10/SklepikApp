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
import { WorkerCardComponent } from './components/worker-card/worker-card.component';
import { WorkerDetailComponent } from './components/worker-detail/worker-detail.component';
import { WorkerEditComponent } from './components/worker-edit/worker-edit.component';



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
    AllWorkersComponent,
    WorkerCardComponent,
    WorkerDetailComponent,
    WorkerEditComponent
  ],
  providers: [ JsonService ],
  exports: [
    DodawanieComponent,
    WszyscyComponent,
    PhotoComponent,
    ImportComponent,
    DownloadComponent,
    AllWorkersComponent,
    WorkerCardComponent,
    WorkerDetailComponent,
    WorkerEditComponent
  ],
})


export class WorkersModule { }
