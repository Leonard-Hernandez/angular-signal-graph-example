import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FiltersStore {
  readonly category = signal<'all'|'books'|'tech'>('all');
  readonly search   = signal('');
  readonly maxPrice = signal<number|null>(null);

  // “too broad” version used to demo the problem
  readonly filterState = computed(() => ({
    category: this.category(),
    search: this.search(),
    maxPrice: this.maxPrice()
  }));
}