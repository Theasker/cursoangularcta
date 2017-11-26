import { Component, OnInit, OnDestroy } from '@angular/core';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  private _fotos: Array<any>;
  private _subscription: any;

  constructor(
    private _fotosService: FotosService
  ) {  }

  ngOnInit() {
    this._subscription = this._fotosService.getFotos().subscribe(
      (fotos) => {
        console.log('fotos: ', fotos);
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
