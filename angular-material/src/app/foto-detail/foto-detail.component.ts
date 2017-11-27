import { Component, OnInit, Inject } from '@angular/core';
import { FotosService } from '../fotos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-foto-detail',
  templateUrl: './foto-detail.component.html',
  styleUrls: ['./foto-detail.component.css']
})

export class FotoDetailComponent implements OnInit {
  private _id: number;
  private _foto: any;

  constructor(
    private _fotosService: FotosService,
    private _router: Router,
    private _route: ActivatedRoute,
    public dialogRef: MatDialogRef<FotoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data);

    this._id = +this._route.snapshot.paramMap.get('id');
    this._fotosService.getFoto(this._id).subscribe(
      (foto) => {
        this._foto = foto;
      }
    );
  }

}
