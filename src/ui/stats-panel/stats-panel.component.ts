import { Component, inject } from '@angular/core';
import { ProductsStore } from '../../state/products.store';

@Component({
  selector: 'app-stats-panel',
  standalone: true,
  template: `
    <p>Visible <span class="value">{{ store.visibleCount() }}</span></p>
<p>Avg price <span class="value">{{ store.avgPrice() }}</span></p>
  `,
  styles: [`
  :host {
    display: block;
    margin: 0 0 1rem 0;
    background: var(--surface-1);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    padding: .75rem .9rem;
  }

  :host p {
    margin: 0;
    display: grid; grid-template-columns: 1fr auto; align-items: center;
    padding: .35rem 0;
    border-bottom: 1px dashed color-mix(in oklab, var(--border) 70%, transparent);
    color: var(--muted-text);
  }

  :host p:last-child { border-bottom: 0; }

  :host p span.value {
    color: var(--text);
    font-weight: 700;
    justify-self: end;
  }
`]
})
export class StatsPanelComponent {
  readonly store = inject(ProductsStore);
}
