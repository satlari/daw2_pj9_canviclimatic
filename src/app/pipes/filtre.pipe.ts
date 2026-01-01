import { Pipe, PipeTransform } from '@angular/core';
import { DadaClimatica } from '../models/dada-climatica';

@Pipe({
  name: 'filtre',
  standalone: true,
})
export class FiltrePipe implements PipeTransform {
  /**
   * Normalitza un text eliminant accents i convertint-lo a minúscules.
   * @param text El text a normalitzar.
   * @returns El text normalitzat.
   */
  private normalitzarText(text: string): string {
    if (!text) return '';
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  transform(
    items: DadaClimatica[],
    filtrePais: string,
    filtreContinent: string
  ): DadaClimatica[] {
    if (!items) {
      return [];
    }

    let itemsFiltrats = items;
    const filtrePaisNormalitzat = this.normalitzarText(filtrePais);

    // 1. Filtrar per país (si s'ha introduït text)
    if (filtrePaisNormalitzat) {
      itemsFiltrats = itemsFiltrats.filter((item) =>
        this.normalitzarText(item.pais).includes(filtrePaisNormalitzat)
      );
    }

    // 2. Filtrar per continent (si s'ha seleccionat un diferent de 'Tots')
    if (filtreContinent && filtreContinent !== 'Tots') {
      itemsFiltrats = itemsFiltrats.filter(
        (item) => item.continent === filtreContinent
      );
    }

    return itemsFiltrats;
  }
}