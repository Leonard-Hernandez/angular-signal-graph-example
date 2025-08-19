import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductsStore } from '../../state/products.store';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="header">
      <h2>Products</h2>
      <div class="meta">
        <span>{{ store.filteredProducts().length }} items</span>
      </div>
    </section>

    <ul class="grid">
      @for (p of store.filteredProducts(); track p.id) {
        <li class="card">
          <img [src]="p.imageUrl" [alt]="p.title" loading="lazy" />
          <div class="body">
            <h3 class="title">{{ p.title }}</h3>
            <div class="row">
              <span class="badge" [class.books]="p.category==='books'" [class.tech]="p.category==='tech'">
                {{ p.category }}
              </span>
              <span class="price">{{ p.price | currency }}</span>
            </div>
          </div>
        </li>
      } @empty {
        <li class="empty" aria-live="polite">No products match your filters.</li>
      }
    </ul>
  `,
styles: [`
:host { display: block; }

.header {
  display: flex; align-items: baseline; justify-content: space-between;
  margin: .25rem 0 1rem 0;
}
.header h2 {
  margin: 0; font-size: 1.05rem; font-weight: 600; letter-spacing: .2px;
}
.meta { color: var(--muted-text); font-size: .88rem; }

.grid {
  list-style: none; padding: 0; margin: 0;
  display: grid; gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.card {
  position: relative;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-1);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--t, 200ms), box-shadow var(--t, 200ms), border-color var(--t, 200ms);
  display: flex; flex-direction: column;
}

.card:hover, .card:focus-within {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: color-mix(in oklab, var(--brand) 25%, var(--border));
}

.card img {
  width: 100%; aspect-ratio: 3 / 2; object-fit: cover; display: block;
  background: #1113; /* subtle shimmer base */
}

.body { padding: .8rem .9rem .9rem; display: grid; gap: .5rem; }
.title { margin: 0; font-size: .98rem; line-height: 1.25; font-weight: 600; }

.row { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }

.price { font-weight: 700; }

.badge {
  font-size: .72rem;
  padding: .2rem .5rem;
  border-radius: 999px;
  text-transform: capitalize;
  border: 1px solid var(--border);
  background: color-mix(in oklab, var(--brand) 6%, var(--surface-1));
}
.badge.tech  { background: color-mix(in oklab, #0891b2 12%, var(--surface-1)); color: #0e7490; border-color: color-mix(in oklab, #0891b2 25%, var(--border)); }
.badge.books { background: color-mix(in oklab, #f59e0b 12%, var(--surface-1)); color: #b45309; border-color: color-mix(in oklab, #f59e0b 25%, var(--border)); }

.empty {
  grid-column: 1 / -1;
  padding: 2rem; text-align: center;
  color: var(--muted-text);
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  background: var(--surface-1);
}

@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
}
`]
})
export class ProductListComponent {
  readonly store = inject(ProductsStore);
}
