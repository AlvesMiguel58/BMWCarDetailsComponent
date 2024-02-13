import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  transform(value: string | null): string {
    if (value) {
      return value.replace(',', ' ');
    }
    return value || ''; // Return an empty string if the value is null
  }

}
