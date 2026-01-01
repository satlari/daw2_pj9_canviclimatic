/*
 * Servei que gestiona les dades de l'aplicació sobre emissions de CO2
 * @author [El teu nom]
 * @version 1.0
 */
import { Injectable } from '@angular/core';
import { DadaClimatica } from '../models/dada-climatica';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private dades: DadaClimatica[] = [
    new DadaClimatica(
      1, 
      'Xina', 
      'Àsia', 
      12466, 
      2022, 
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg', 
      'La Xina és actualment el major emissor de gasos d\'efecte hivernacle del món. El seu ràpid creixement econòmic s\'ha basat en gran mesura en la crema de carbó per a l\'energia i la indústria. Tot i això, el país està invertint fortament en energies renovables, sent líder mundial en producció d\'energia solar i eòlica, amb l\'objectiu d\'arribar al pic d\'emissions abans del 2030.'
    ),
    new DadaClimatica(
      2, 
      'Estats Units', 
      'Amèrica', 
      5057, 
      2022, 
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg', 
      'Els Estats Units són el segon emissor mundial i històricament el major responsable de les emissions acumulades. Amb una economia molt desenvolupada i un alt consum energètic per càpita, el transport i la generació d\'electricitat són les fonts principals. Recentment, s\'han reincorporat als Acords de París i estan impulsant polítiques per reduir les emissions un 50% el 2030.'
    ),
    new DadaClimatica(
      3, 
      'Índia', 
      'Àsia', 
      3033, 
      2022, 
      'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg', 
      'L\'Índia té unes emissions per càpita molt baixes, però degut a la seva enorme població, és el tercer emissor mundial. El país s\'enfronta al repte de treure milions de persones de la pobresa mentre intenta fer una transició energètica. Depèn molt del carbó, però té objectius ambiciosos per a l\'energia solar.'
    ),
    new DadaClimatica(
      4, 
      'Rússia', 
      'Europa', 
      1648, 
      2022, 
      'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg', 
      'Rússia és un dels majors productors de petroli i gas natural del món. La seva economia està fortament lligada a l\'exportació d\'aquests combustibles fòssils. A més, la ineficiència energètica en molts sectors industrials i residencials contribueix a les seves altes emissions.'
    ),
    new DadaClimatica(
      5, 
      'Japó', 
      'Àsia', 
      1085, 
      2022, 
      'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg', 
      'Després de l\'accident nuclear de Fukushima, Japó va augmentar l\'ús de combustibles fòssils per compensar el tancament de centrals nuclears. És una economia altament industrialitzada i tecnològica que busca innovar en hidrogen i captura de carboni per reduir la seva petjada.'
    ),
    new DadaClimatica(
      6, 
      'Alemanya', 
      'Europa', 
      666, 
      2022, 
      'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg', 
      'Alemanya és coneguda per la seva "Energiewende" (transició energètica). Tot i ser líder en renovables, encara depèn del carbó (lignit) per a una part de la seva electricitat, especialment després de decidir tancar les centrals nuclears. És el major emissor de la Unió Europea.'
    ),
    new DadaClimatica(
      7,
      'Brasil',
      'Amèrica',
      477,
      2022,
      'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
      'A diferència d\'altres països industrials, gran part de les emissions del Brasil provenen de l\'ús de la terra i la desforestació de l\'Amazones. L\'agricultura i la ramaderia intensiva són motors clau d\'aquestes emissions, tot i que la seva matriu elèctrica és força neta gràcies a la hidroelèctrica.'
    ),
    new DadaClimatica(
      8,
      'Indonèsia',
      'Àsia',
      692,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
      'Indonèsia s\'enfronta a grans reptes amb la desforestació per a plantacions d\'oli de palma i els incendis en terres de torba, que alliberen quantitats massives de CO2 emmagatzemat. El ràpid desenvolupament econòmic també està augmentant la demanda d\'energia fòssil.'
    ),
    new DadaClimatica(
      9,
      'Canadà',
      'Amèrica',
      547,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
      'El Canadà té una de les taxes d\'emissió per càpita més altes. Una gran part prové del sector del transport i de la indústria del petroli i gas, especialment l\'extracció de sorres bituminoses a Alberta, que és un procés molt intensiu en energia.'
    ),
    new DadaClimatica(
      10,
      'Iran',
      'Àsia',
      711,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
      'Com a gran productor d\'hidrocarburs, l\'Iran té accés a energia barata, cosa que desincentiva l\'eficiència energètica. Les sancions internacionals també han dificultat l\'accés a tecnologies més netes i eficients per a la seva indústria.'
    ),
    new DadaClimatica(
      11,
      'Corea del Sud',
      'Àsia',
      604,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
      'La seva economia, fortament industrialitzada i tecnològica, depèn en gran mesura dels combustibles fòssils importats. Estan fent una transició cap a l\'hidrogen i les renovables per reduir la seva dependència energètica.'
    ),
    new DadaClimatica(
      12,
      'Aràbia Saudita',
      'Àsia',
      672,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
      'Com a major exportador de petroli del món, les seves emissions estan dominades pel sector energètic i la producció de petroli i gas. Recentment, han començat a invertir en projectes d\'energia solar a gran escala.'
    ),
    new DadaClimatica(
      13,
      'Sud-àfrica',
      'Àfrica',
      436,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
      'La seva matriu energètica està dominada pel carbó, sent un dels països més dependents d\'aquest combustible. Això fa que tingui una de les petjades de carboni més altes d\'Àfrica.'
    ),
    new DadaClimatica(
      14,
      'Austràlia',
      'Oceania',
      396,
      2022,
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
      'Tot i tenir un gran potencial per a l\'energia solar i eòlica, Austràlia és un dels majors exportadors de carbó del món. Les seves emissions per càpita són de les més altes a nivell global.'
    )
  ];

  constructor() {}

  /**
   * Retorna totes les dades climàtiques.
   * @returns Un array de DadaClimatica.
   */
  getDades(): DadaClimatica[] {
    return this.dades;
  }

  /**
   * Retorna una dada climàtica específica pel seu ID.
   * @param id - L'ID de la dada a cercar.
   * @returns La DadaClimatica corresponent o undefined si no es troba.
   */
  getDadaPerId(id: number): DadaClimatica | undefined {
    return this.dades.find(d => d.id === id);
  }
}
