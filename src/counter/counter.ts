import { ChangeDetectionStrategy, Component, computed, effect, linkedSignal, signal } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.html',
    styleUrls: ['./counter.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    protected count = signal(0);
    protected lastValue = computed(() => this.count());
    protected previousCount = linkedSignal(() => this.count());

    // BEFORE:
    protected double = computed(() => {
        const currentValue = 0; // This should be this.count()
        console.log('Double calculated (broken version)');
        return currentValue * 2;
    });
  
    // AFTER:
    // protected double = computed(() => {
    //     const currentValue = this.count();
    //     console.log('Double calculated (fixed version)');
    //     return currentValue * 2;
    // });
  
    constructor() {
        effect(() => {
            const current = this.count();
            console.log(`Count changed to: ${current}`);
        }, { debugName: 'countLogger' });
    }
  
    protected increment(): void {
        this.count.update(n => n + 1);
    }
  
    protected reset(): void {
        this.count.set(0);
    }
  }