import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAlumn } from '../interfaces/alumn.interface';
import { AlumnService } from '../service/alumn.service';


@Component({
  selector: 'app-alumns-list',
  templateUrl: './alumns-list.component.html',
  styleUrls: ['./alumns-list.component.css']
})
export class AlumnsListComponent implements OnInit, OnDestroy {
  private _alumn: IAlumn;
  private _alumns: IAlumn[] = [];
  private _subscription: any;
  private _filteredAlumns: Array<IAlumn> = [];

  // Inyección de dependencias que inyectamos del servicio
  // y no hace falta instanciarlo al ser un servicio y haberlo inyectado.
  constructor(
    private _alumnService: AlumnService
  ) {
  }

  
  
    public get listFilter(): string{
      // proceso de control antes de la devolución
      return this._listFilter;
    }
  
    public set listFilter(value: string) {
      // proceso antes de asignación
      this._listFilter = value;
      // Comprobamos que hay algo escrito en la caja de busqueda
      // para aplicar el filtro o no aplicarlo y mostrar todos los productos
      this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
    }

  ngOnInit() {
    this._subscription = this._alumnService.getAlumns().subscribe(
      (alumns) => {
        this._alumns = alumns;
        this._filteredAlumns = alumns;
      }, (error) => {
        console.log('Error al recuperar los datos: ', error);
      }
    )
    console.log('this._alumnService.getAlumns(): ', this._alumnService.getAlumns());
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
