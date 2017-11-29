import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FotosService } from '../fotos.service';
import { FotoDetailComponent } from '../foto-detail/foto-detail.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grid-material',
  templateUrl: './grid-material.component.html',
  styleUrls: ['./grid-material.component.css']
})
export class GridMaterialComponent implements OnInit, OnDestroy {
  private _fotos: Array<any>;
  private _subscription: any;


  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private _fotosService: FotosService,
    public dialog: MatDialog
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

  openFoto(id: number): void {
    const dialogRef = this.dialog.open( FotoDetailComponent, {
      width: '450px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
