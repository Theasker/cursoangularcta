import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(numbers: number[]): number {
    let average: number = 0;
    if (numbers){
      average = numbers.reduce( (valorAnterior, valorActual, indice, vector) => {
        return valorAnterior + valorActual;
      }, 0)
      average = average / numbers.length;
    }
    return average;
  }

}
