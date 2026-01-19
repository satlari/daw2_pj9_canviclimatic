/*
 * Component que mostra la llista de països i les seves emissions
 * i permet filtrar per país i continent.
 * @author [El teu nom]
 * @version 1.1
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Per [(ngModel)]
import { MatFormFieldModule } from '@angular/material/form-field'; // Per al formulari
import { MatInputModule } from '@angular/material/input'; // Per a l'input de text
import { MatSelectModule } from '@angular/material/select'; // Per al desplegable
import { MatListModule } from '@angular/material/list'; // Per a les llistes
import { MatIconModule } from '@angular/material/icon'; // Per a les icones
import { ClimaService } from '../../services/clima.service';
import { DadaClimatica } from '../../models/dada-climatica';
import { FiltrePipe } from '../../pipes/filtre.pipe'; // Importem el Pipe
import { RetallarTextPipe } from '../../pipes/retallar-text.pipe';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-llista-emissions',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FiltrePipe,
    RetallarTextPipe,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './llista-emissions.html',
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class LlistaEmissions implements OnInit {
  llistaDades: DadaClimatica[] = [];
  continents: string[] = [];

  // Propietats per als filtres
  filtrePais: string = '';
  filtreContinent: string = 'Tots';

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    const dades = this.climaService.obtenirDades();
    this.llistaDades = dades;

    // Obtenim la llista de continents únics per al desplegable del filtre
    this.continents = ['Tots', ...new Set(dades.map(d => d.continent))];
  }
}
