import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.navigateToSelectedItem();
  }

  navigateToSelectedItem() {
    this.router.navigateByUrl('/toDo');
  }
}
