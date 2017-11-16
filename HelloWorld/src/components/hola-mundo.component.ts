import {Component} from '@angular/core';

@Component({
    selector: 'hola-mundo',
    templateUrl: './hola-mundo.component.html'
    ,
    styles: ['./hola-mundo.component.css']
})

export class HolaMundoComponent{
    public titulo: string;

    constructor() {
        this.titulo = 'Título del componente hola-mundo';
    }
}