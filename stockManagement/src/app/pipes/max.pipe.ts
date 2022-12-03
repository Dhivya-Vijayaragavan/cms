import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'max',
  pure : true
})
export class MaxPipe implements PipeTransform {
  max : number | any;
  transform(value: any, ...args: any[]): any {
    let stockPrice :any = []

    value.map((data:any) => {
      stockPrice.push(data.stockPrice);
    })
    this.max = stockPrice.reduce((a : any, b : any) => Math.max(a, b));
    return this.max;
  }
}
