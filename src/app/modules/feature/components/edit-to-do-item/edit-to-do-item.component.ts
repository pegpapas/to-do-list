import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as fromActions from '../../store/actions/index';
import * as fromReducers from '../../store/reducers/index';
import * as fromSelectors from '../../store/selectors/index';


@Component({
  selector: 'app-edit-to-do-item',
  templateUrl: './edit-to-do-item.component.html'
})
export class EditToDoItemComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private store: Store<fromReducers.FeatureState>) {
    this.form = this.formBuilder.group({
      itemIsCompleted: ['', null],
      itemTitle: ['', null],
      itemEndDate: ['', null],
      itemDescription: ['', null]
    });
  }

  ngOnInit() { }

  saveNewToDo() {
    const { itemIsCompleted, itemTitle, itemEndDate, itemDescription } = this.form.controls;
    this.store.dispatch(new fromActions.AddToDoItem({
      id: 0, description: itemDescription.value, title: itemTitle.value, isDone: itemIsCompleted.value, endDate: itemEndDate.value
    }));
    this.cancel();
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
