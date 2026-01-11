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
    elements: DadaClimatica[],
    filtrePais: string,
    filtreContinent: string
  ): DadaClimatica[] {
    if (!elements) {
      return [];
    }

    let elementsFiltrats = elements;
    const filtrePaisNormalitzat = this.normalitzarText(filtrePais);

    // 1. Filtrar per país (si s'ha introduït text)
    if (filtrePaisNormalitzat) {
      elementsFiltrats = elementsFiltrats.filter((element) =>
        this.normalitzarText(element.pais).includes(filtrePaisNormalitzat)
      );
    }

    // 2. Filtrar per continent (si s'ha seleccionat un diferent de 'Tots')
    if (filtreContinent && filtreContinent !== 'Tots') {
      elementsFiltrats = elementsFiltrats.filter(
        (element) => element.continent === filtreContinent
      );
    }

    return elementsFiltrats;
  }
}