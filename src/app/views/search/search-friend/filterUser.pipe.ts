import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchUser: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchUser) {
      return items;
    }
    searchUser = searchUser.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchUser);
    });
  }
}