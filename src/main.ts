import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FilterToolbarComponent } from './ui/filter-toolbar/filter-toolbar.component';
import { ProductListComponent } from './ui/product-list/products-list.component';
import { StatsPanelComponent } from './ui/stats-panel/stats-panel.component';

@Component({
  selector: 'app-root',
  template: `
    <app-filter-toolbar />
    <app-stats-panel />
    <app-product-list />
  `,
  imports: [
    FilterToolbarComponent, ProductListComponent, StatsPanelComponent
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
