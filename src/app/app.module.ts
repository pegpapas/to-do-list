import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './modules/main/main.module';
import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './modules/main/app/app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    StoreModule.forRoot({})
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
