import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-buttons',
  templateUrl: './common-buttons.component.html'
})
export class CommonButtonsComponent implements OnInit {
  @Input() primaryTitle: string;
  @Input() secondaryTitle: string;
  @Input() disablePrimaryBtn = false;

  @Output() primaryBtnEmitted = new EventEmitter<any>();
  @Output() secondaryBtnEmitted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  primaryAction() {
    this.primaryBtnEmitted.emit();
  }

  secondaryAction() {
    this.secondaryBtnEmitted.emit(null);
  }
}
