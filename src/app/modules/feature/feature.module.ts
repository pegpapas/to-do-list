import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { EditToDoItemComponent } from './edit-to-do-item/edit-to-do-item.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    StoreModule.forFeature('feature', reducers)
  ],
  declarations: [
    ToDoListComponent,
    EditToDoItemComponent
  ],
  exports: [
    ToDoListComponent,
    EditToDoItemComponent
  ],
  entryComponents: [
    ToDoListComponent,
    EditToDoItemComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FeatureModule { }
