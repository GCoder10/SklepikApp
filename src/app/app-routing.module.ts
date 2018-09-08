import { MessagesResolver } from './shared/resolvers/messages.resolver';
import { MessagesComponent } from './workers/components/messages/messages.component';
import { ListsResolver } from './shared/resolvers/lists.resolver';
import { WorkerLikeListComponent } from './workers/components/worker-like-list/worker-like-list.component';
import { PreventUnsavedChanges } from './shared/guards/prevent-unsaved-changes.guard';
import { WorkerEditResolver } from './shared/resolvers/worker-edit.resolver';
import { WorkerEditComponent } from './workers/components/worker-edit/worker-edit.component';
import { WorkerListResolver } from './shared/resolvers/worker-list.resolver';
import { WorkerDetailResolver } from './shared/resolvers/worker-detail.resolver';
import { WorkerDetailComponent } from './workers/components/worker-detail/worker-detail.component';
import { AllWorkersComponent } from './workers/components/all-workers/all-workers.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DownloadComponent } from './workers/components/download/download.component';
import { PhotoComponent } from './workers/components/photo/photo.component';
import { WszyscyComponent } from './workers/components/wszyscy/wszyscy.component';
import { DodawanieComponent } from './workers/components/dodawanie/dodawanie.component';
import { PytaniaComponent } from './components/pytania/pytania.component';
import { GaleriaBiuraComponent } from './components/galeria-biura/galeria-biura.component';
import { LokalizacjaComponent } from './components/lokalizacja/lokalizacja.component';
import { PracaComponent } from './components/praca/praca.component';
import { RulesComponent } from './components/rules/rules.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/HomePageComponents/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ONasComponent } from './components/o-nas/o-nas.component';
import { StartComponent } from './auth/components/start/start.component';
import { EndComponent } from './auth/components/end/end.component';
import { ImportComponent } from './workers/components/import/import.component';



const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'logowanie', component: SigninComponent },
  { path: 'rejestracja', component: SignupComponent },
  { path: 'oNas', component: ONasComponent },
  { path: 'regulamin', component: RulesComponent },
  { path: 'pytania', component: PytaniaComponent },
  { path: 'praca', component: PracaComponent },
  { path: 'biura', component: GaleriaBiuraComponent },
  { path: 'lokalizacja', component: LokalizacjaComponent },

  { path: '', runGuardsAndResolvers: 'always',
              canActivate: [AuthGuard],
              children: [

      { path: 'end', component: EndComponent },
      { path: 'start', component: StartComponent },
      { path: 'wszyscy', component: WszyscyComponent },
      { path: 'dodawanie', component: DodawanieComponent },
      { path: 'photo', component: PhotoComponent },
      { path: 'import', component: ImportComponent },
      { path: 'workerLikeList', component: WorkerLikeListComponent,
                                resolve: {users: ListsResolver} },
      { path: 'download', component: DownloadComponent },
      { path: 'showAllWorkers', component: AllWorkersComponent,
                                resolve: {users: WorkerListResolver} },
      { path: 'showChosenWorkerDetails/:id', component: WorkerDetailComponent,
                                             resolve: {user: WorkerDetailResolver} },
      { path: 'worker/edit', component: WorkerEditComponent,
                             resolve: {user: WorkerEditResolver},
                             canDeactivate: [PreventUnsavedChanges] },
      { path: 'messages', component: MessagesComponent,
                          resolve: {messages: MessagesResolver} }

  ]
  },

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
