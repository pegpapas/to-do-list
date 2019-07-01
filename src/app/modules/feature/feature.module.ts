import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { EditToDoItemComponent } from './components/edit-to-do-item/edit-to-do-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
