import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retallarText',
  standalone: true
})
export class RetallarTextPipe implements PipeTransform {
  transform(value: string, limit: number = 150): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + '...';
  }
}