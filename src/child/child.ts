import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child {

  @Input() count!: number;

  @Output() greeting = new EventEmitter<string>();

  constructor() {
    let interval = setInterval(() => {
      //this.greeting.emit('hola');
    }, 3000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }
}
