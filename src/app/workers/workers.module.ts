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
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';
import { WorkerLikeListComponent } from './components/worker-like-list/worker-like-list.component';
import { MessagesComponent } from './components/messages/messages.component';



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
    WorkerEditComponent,
    PhotoEditorComponent,
    WorkerLikeListComponent,
    MessagesComponent
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
    WorkerEditComponent,
    WorkerLikeListComponent,
    PhotoEditorComponent,
    MessagesComponent
  ],
})


export class WorkersModule { }
