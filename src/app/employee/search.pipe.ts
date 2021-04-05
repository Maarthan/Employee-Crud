import { Pipe, PipeTransform } from '@angular/core';
import Employee from 'src/assets/models/Employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<Employee>, args: string): unknown {
    console.log(args)
    if(args.length != 0){
      let searchArray = [];
      searchArray =  value.filter((val)=>{
        return val.name.toLocaleLowerCase().match(args.toLocaleLowerCase()) || val.email.toLocaleLowerCase().match(args.toLocaleLowerCase())
      })
      console.log(searchArray)
      return searchArray.length != 0 ? searchArray : [{name:"No match found",email:"No match found"}]
    }
    else{
      return value;
    }
  }

}
