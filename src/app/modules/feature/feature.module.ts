import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';

import { ToDoListComponent } from './to-do-list/to-do-list.component';


@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    FeatureRoutingModule,
  ],
  declarations: [
    ToDoListComponent
  ],
  exports: [
    ToDoListComponent
  ],
  entryComponents: [
    ToDoListComponent,
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FeatureModule { }
