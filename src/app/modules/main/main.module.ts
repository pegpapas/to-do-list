import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    LayoutComponent,
    LoginComponent,
    HeaderComponent,
  ],
  exports: [
    LayoutComponent,
    LoginComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MainModule { }
