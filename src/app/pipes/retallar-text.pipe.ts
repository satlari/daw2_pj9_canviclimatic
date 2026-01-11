import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retallarText',
  standalone: true
})
export class RetallarTextPipe implements PipeTransform {
  transform(valor: string, limit: number = 150): string {
    if (!valor) return '';
    if (valor.length <= limit) return valor;
    return valor.substring(0, limit) + '...';
  }
}