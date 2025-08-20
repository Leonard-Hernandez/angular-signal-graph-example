import { ChangeDetectionStrategy, Component, computed, effect, signal } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.html',
    styleUrls: ['./counter.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    protected count = signal(0, { debugName: 'count' });
    protected logCount = signal(0, { debugName: 'logCount' });
    protected lastValue = signal(0, { debugName: 'lastValue' });
  
    // BEFORE: This computed signal is BROKEN (Green square)
    protected double = computed(() => {
        const initialValue = 0; // This should be this.count()
        console.log('Double calculated (broken version)');
        return initialValue * 2;
    });
  
    // AFTER: Uncomment this and comment out the above to fix
    // protected double = computed(() => {
    //     const currentValue = this.count();
    //     console.log('Double calculated (fixed version)');
    //     return currentValue * 2;
    // });
  
    constructor() {
        effect(() => {
            const current = this.count();
            console.log(`Count changed to: ${current}`);
            this.logCount.update(count => count + 1);
            this.lastValue.set(current);
        }, { debugName: 'countLogger' });
    }
  
    protected increment(): void {
        this.count.update(n => n + 1);
    }
  
    protected reset(): void {
        this.count.set(0);
    }
  }