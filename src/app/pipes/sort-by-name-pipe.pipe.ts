import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByNamePipe',
})
export class SortByNamePipePipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array) || !field) return array;
    return array.sort((a, b) => {
      const valA = a[field];
      const valB = b[field];

      const isAlphaA = /^[A-Za-z]/.test(valA);
      const isAlphaB = /^[A-Za-z]/.test(valB);

      if (isAlphaA && !isAlphaB) return -1;
      if (!isAlphaA && isAlphaB) return 1;

      return valA.localeCompare(valB);
    });
  }
}
