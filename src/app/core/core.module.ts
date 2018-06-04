import { HeaderafterloginComponent } from './components/HeadersComponents/headerafterlogin/headerafterlogin.component';
import { HeaderloggedComponent } from './components/HeadersComponents/headerlogged/headerlogged.component';
import { HeaderComponent } from './components/HeadersComponents/header/header.component';
import { SharedModule } from './../shared/shared.module';
import { Footer3Component } from './components/FootersComponents/footer3/footer3.component';
import { Footer2Component } from './components/FootersComponents/footer2/footer2.component';
import { FooterComponent } from './components/FootersComponents/footer/footer.component';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    FooterComponent,
    Footer2Component,
    Footer3Component,
    HeaderComponent,
    HeaderloggedComponent,
    HeaderafterloginComponent
  ],
  exports: [
    FooterComponent,
    Footer2Component,
    Footer3Component,
    HeaderComponent,
    HeaderloggedComponent,
    HeaderafterloginComponent
  ]
})


export class CoreModule { }
