import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, limit?:number): any {
    if (!value) return null;
    limit = (limit)? limit:60;
    return value.substr(0,limit);
  
  }

}
