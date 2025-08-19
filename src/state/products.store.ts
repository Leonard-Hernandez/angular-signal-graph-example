// src/app/state/products.store.ts
import { Injectable, inject, computed, signal } from '@angular/core';
import { PRODUCTS, type Product } from '../data';
import { FiltersStore } from './filters.store';

@Injectable({ providedIn: 'root' })
export class ProductsStore {
  private readonly filters: FiltersStore = inject(FiltersStore);

  readonly products = signal<Product[]>(PRODUCTS);

  readonly filteredProducts = computed<Product[]>(() => {
    let list = this.products();

    const category = this.filters.category();
    const search   = this.filters.search();
    const maxPrice = this.filters.maxPrice();

    if (category !== 'all') list = list.filter(p => p.category === category);
    if (maxPrice != null)   list = list.filter(p => p.price <= maxPrice);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q));
    }
    return list;
  });

  // ✅ Add these so StatsPanel can compile
  readonly visibleCount = computed<number>(() => this.filteredProducts().length);

  readonly avgPrice = computed<number>(() => {
    const arr = this.filteredProducts();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) sum += arr[i].price;
    return arr.length ? Math.round((sum / arr.length) * 100) / 100 : 0;
  });
}
