import { ComponentsModule } from './components/components.module';
import { WorkersModule } from './workers/workers.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    StoreModule,
    CoreModule,
    SharedModule,
    AuthModule,
    WorkersModule,
    ComponentsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
