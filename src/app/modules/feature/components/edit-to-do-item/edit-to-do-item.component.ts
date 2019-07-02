import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { ToDoEntity } from 'src/app/models/to-do-entity';
import { FeatureStoreFacade } from '../../store/feature.store.facade';

@Component({
  selector: 'app-edit-to-do-item',
  templateUrl: './edit-to-do-item.component.html'
})
export class EditToDoItemComponent implements OnInit, OnDestroy {
  form: FormGroup;
  selectedItem: ToDoEntity = null;
  minDate = new Date();
  disablePrimaryBtn = true;
  private subscription: ISubscription;

  readonly PRIMARY_BTN = 'Save';
  readonly SECONDARY_BTN = 'Cancel';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private store: FeatureStoreFacade) {
    this.form = this.formBuilder.group({
      itemIsCompleted: ['', null],
      itemTitle: ['', null],
      itemEndDate: ['', null],
      itemDescription: ['', null]
    });
  }

  ngOnInit() {
    this.subscription = this.store.selectedEntity$
      .subscribe(item => {
        this.selectedItem = item;
        if (this.selectedItem != null && this.selectedItem !== undefined) {
          this.setForm();
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setForm(): void {
    const { itemIsCompleted, itemTitle, itemEndDate, itemDescription } = this.form.controls;
    itemIsCompleted.setValue(this.selectedItem.isDone);
    itemTitle.setValue(this.selectedItem.title);
    itemEndDate.setValue(this.selectedItem.endDate);
    itemDescription.setValue(this.selectedItem.description);
  }

  valueChangeHandler(): void {
    const { itemTitle, itemEndDate } = this.form.controls;

    if (this.selectedItem != null && this.selectedItem !== undefined) {
      this.disablePrimaryBtn = (this.selectedItem.title === itemTitle.value
        && Date.parse(this.selectedItem.endDate) === Date.parse(itemEndDate.value));
    } else {
      this.disablePrimaryBtn = !(itemTitle.value && itemEndDate.value);
    }
  }

  updateToDo(): void {
    const { itemIsCompleted, itemTitle, itemEndDate, itemDescription } = this.form.controls;

    const item: ToDoEntity = {
      id: 0, description: itemDescription.value,
      title: itemTitle.value, isDone: itemIsCompleted.value, endDate: itemEndDate.value
    };

    if (this.selectedItem === null || this.selectedItem === undefined) {
      this.store.addToDo(item);
    } else {
      item.id = this.selectedItem.id;
      this.store.updateToDo(item);
    }

    this.cancel();
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }

}
