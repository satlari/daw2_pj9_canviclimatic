import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClimaService } from '../../services/clima.service';
import { DadaClimatica } from '../../models/dada-climatica';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-detall-emissio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './detall-emissio.html',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ],
  host: { '[@cardAnimation]': 'true' }
})
export class DetallEmissio implements OnInit {
  dada: DadaClimatica | undefined;

  constructor(
    private route: ActivatedRoute,
    private climaService: ClimaService
  ) {}

  ngOnInit(): void {
    // Obtenim l'ID de la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Cerquem la dada amb el servei
      this.dada = this.climaService.obtenirDadaPerId(+id);
    }
  }
}
