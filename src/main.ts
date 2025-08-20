import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CounterComponent],
    template: `<app-counter></app-counter>`,
    styles: [`
        :host {
            display: block;
            min-height: 100vh;
            background: #f3f4f6;
            padding: 20px; 
        }
    `]
})
export class AppComponent {}

bootstrapApplication(AppComponent);
