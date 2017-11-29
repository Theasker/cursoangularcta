import { Component, OnInit, Inject } from '@angular/core';
import { FotosService } from '../fotos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-foto-detail',
  templateUrl: './foto-detail.component.html',
  styleUrls: ['./foto-detail.component.css']
})

export class FotoDetailComponent implements OnInit {
  private _id: number;
  private _foto: any;
  photoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _fotosService: FotosService,
    private _router: Router,
    private _route: ActivatedRoute,
    public dialogRef: MatDialogRef<FotoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.photoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });

    console.log(this.data);
    // this._id = +this._route.snapshot.paramMap.get('id');

    this._fotosService.getFoto( this.data.id ).subscribe(
      (foto) => {
        this._foto = foto;
        this.photoForm.setValue({
          title: foto.title
        });
        console.log('this._foto: ', this._foto);
      }
    );
  }

  savePhoto() {
    this._foto = Object.assign({}, this._foto, this.photoForm.value);
    console.log('this._foto: ', this._foto);
  }
}
