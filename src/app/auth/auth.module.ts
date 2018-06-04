import { EndComponent } from './components/end/end.component';
import { StartComponent } from './components/start/start.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    StartComponent,
    EndComponent
  ],
  providers: [ AuthService ],
  exports: [
    SigninComponent,
    SignupComponent,
    StartComponent,
    EndComponent
  ]
})


export class AuthModule { }
