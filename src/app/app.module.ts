import { ComponentsModule } from './components/components.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    StoreModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy-w-fFKYIBSOXIxBLVzA7YcrlOl-lxxw',
      libraries: ['places']
    }),
    SharedModule,
    AuthModule,
    WorkersModule,
    ComponentsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
