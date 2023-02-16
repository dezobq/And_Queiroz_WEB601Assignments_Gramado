import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

// Assignment 3 - Pipe to filter content by type
@Pipe({
  name: 'filterType',
})
export class FilterTypePipe implements PipeTransform {
  transform(contentArray: Content[], type?: string): Content[] {
    if (!type) {
      return contentArray.filter((content) => !content.type);
    } else {
      return contentArray.filter((content) => content.type === type);
    }
  }
}
