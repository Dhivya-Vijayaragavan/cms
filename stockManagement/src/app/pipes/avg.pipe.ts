import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avg',
  pure : true
})
export class AvgPipe implements PipeTransform {
  average : any ;
  transform(value: any, ...args: any[]): any {
    let stockPrice :any = []
    value.map((data:any) => {
      stockPrice.push(data.stockPrice);
    })
    let total = stockPrice.reduce((a:any, b:any) => a + b);
    return this.average = (total / stockPrice.length);

  }

}
