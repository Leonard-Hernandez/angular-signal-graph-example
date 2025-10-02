import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-anoter-child',
  imports: [],
  templateUrl: './anoter-child.html',
  styleUrl: './anoter-child.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnoterChild {

  count = input<number>(0);

  greeting = output<string>();

  constructor() {
    let interval = setInterval(() => {
      //this.greeting.emit('como estas');
    }, 4000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }

}
