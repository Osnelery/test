import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByName'
})
export class OrderByNamePipe implements PipeTransform {

  transform(value: string[] | undefined | null): string[] {
    if (!value) return []; 
    return [...value].sort((a, b) => a.localeCompare(b)); 
  }

}
