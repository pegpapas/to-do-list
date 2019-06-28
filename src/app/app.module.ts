import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './modules/main/main.module';

import { AppComponent } from './modules/main/app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    AppRoutingModule,
    // SharedModule,
    MainModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
