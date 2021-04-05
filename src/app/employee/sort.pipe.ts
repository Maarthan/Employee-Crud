import { Pipe, PipeTransform } from '@angular/core';
import Employee from 'src/assets/models/Employee';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Employee>, ...args: unknown[]): unknown {
    return value.sort((x,y)=>{
      let a = x.name.toLocaleLowerCase();
      let b = y.name.toLocaleLowerCase();
      return a < b ? -1 : 1;
    })
  }

}
