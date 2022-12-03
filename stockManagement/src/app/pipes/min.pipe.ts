import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min',
  pure:true
})
export class MinPipe implements PipeTransform {

  min : number | any;
  transform(value: any, ...args: any[]): any {
    let stockPrice :any = []

    value.map((data:any) => {
      stockPrice.push(data.stockPrice);
    })
    this.min = stockPrice.reduce((a : any, b : any) => Math.min(a, b));
    return this.min;
  }

}
