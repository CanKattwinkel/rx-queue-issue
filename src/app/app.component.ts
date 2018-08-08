import { Component } from '@angular/core';
import { RxQueue } from 'rx-queue'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'queue-error';

  ngOnInit() {
    const queue = new RxQueue()
    queue.next(1)
    queue.next(2)
    queue.next(3)

    queue.subscribe(console.log);
  }

}
