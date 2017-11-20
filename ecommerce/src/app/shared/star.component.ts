import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<any>;
  starWidth: number;
  private _nstar: boolean[] = [];

  constructor() {
    this.ratingClicked = new EventEmitter<any>();
  }

  ngOnInit() {
    this._nstar = [true,true,true,true,true];
  }

  // Se ejecuta cuando cambia alguna de las propiedades de la clase
  ngOnChanges(): void {
    console.log('Cambio en las propiedades');
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit({
      prop1: true,
      name: 'texto',
      code: 1234,
      show: false
    });
  }
}
