import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicationModule } from './application/application.module';



@NgModule({
  //ou mettre les templates
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // ApplicationModule
  ],
  //ou mettre les services partagés 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
