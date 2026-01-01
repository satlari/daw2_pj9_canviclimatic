/*
 * Classe que representa el model de dades d'una emissió climàtica
 * @author [El teu nom]
 * @version 1.0
 */
export class DadaClimatica {
  constructor(
    public id: number,
    public pais: string,
    public continent: string,
    public emissionsCo2: number,
    public anyDada: number,
    public imatgeUrl: string,
    public descripcio: string
  ) {}
}
