// src/app/ui/filter-toolbar/filter-toolbar.component.ts
import { Component, inject } from '@angular/core';
import { FiltersStore } from '../../state/filters.store';

@Component({
  selector: 'app-filter-toolbar',
  standalone: true,
  template: `
    <label>
      Search
      <input
        [value]="filters.search()"
        (input)="filters.search.set($any($event.target).value ?? '')"
      />
    </label>

    <label>
      Category
      <select
        [value]="filters.category()"
        (change)="filters.category.set($any($event.target).value)"
      >
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="tech">Tech</option>
      </select>
    </label>

    <label>
      Max Price
      <input
        type="number"
        [value]="filters.maxPrice() ?? ''"
        (input)="onMax($any($event.target).value)"
      />
    </label>
  `,
  styles: [`
  :host {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.9rem;
    padding: 0.9rem;
    margin: 0 0 1rem 0;
    background: var(--surface-1);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
  }

  :host label {
    display: grid;
    gap: 0.35rem;
    color: var(--muted-text);
    font-size: 0.82rem;
  }

  :host input,
  :host select {
    appearance: none;
    width: 100%;
    padding: 0.55rem 0.7rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface-2);
    color: var(--text);
    font-size: 0.95rem;
    line-height: 1.2;
    transition: border-color var(--t, 200ms), box-shadow var(--t, 200ms), background-color var(--t, 200ms);
  }

  :host input::placeholder { color: var(--muted-text); }

  :host input:hover,
  :host select:hover {
    border-color: color-mix(in oklab, var(--brand) 35%, var(--border));
  }

  :host input:focus,
  :host select:focus {
    outline: 0;
    border-color: var(--brand);
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand) 20%, transparent);
    background: var(--surface-1);
  }
`]
})
export class FilterToolbarComponent {
  public readonly filters: FiltersStore = inject(FiltersStore);

  onMax(raw: string) {
    const v = Number(raw);
    this.filters.maxPrice.set(Number.isFinite(v) ? v : null);
  }
}
