import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item =>
      item.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      item.editora.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
