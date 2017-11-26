import { Component, OnInit, OnDestroy } from '@angular/core';

import { FotosService } from '../fotos.service';

@Component({
  selector: 'app-grid-material',
  templateUrl: './grid-material.component.html',
  styleUrls: ['./grid-material.component.css']
})
export class GridMaterialComponent implements OnInit, OnDestroy {
  private _fotos: Array<any>;
  private _subscription: any;

  constructor(
    private _fotosService: FotosService
  ) {  }

  ngOnInit() {
    this._subscription = this._fotosService.getFotos().subscribe(
      (fotos) => {
        this._fotos = fotos;
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
