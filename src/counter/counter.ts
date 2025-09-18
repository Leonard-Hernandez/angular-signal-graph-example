import { ChangeDetectionStrategy, Component, computed, effect, linkedSignal, signal } from "@angular/core";
import { Child } from "../child/child";
import { AnoterChild } from "../anoter-child/anoter-child";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.html',
    styleUrls: ['./counter.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Child, AnoterChild]
})
export class CounterComponent {
    protected count = signal(0);
    protected lastValue = computed(() => this.count());
    protected previousCount = linkedSignal(() => this.count());

    protected double = computed(() => {
        const currentValue = 0;
        console.log('Double calculated (broken version)');
        return currentValue * 2;
    });
  
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

    protected greeting(greeting: string): void {
        alert(greeting);
    }
  }