import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  let array: number[] = [1, 2, 3];

  Observable.of(array).subscribe(
      (data) => {
          console.log('data: ', data);
      }
  );

  array[0] = 3;
  array[0] = 5;

}
