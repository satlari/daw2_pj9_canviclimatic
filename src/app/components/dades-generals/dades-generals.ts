/*
 * Component que mostra dades generals
 * @author [El teu nom]
 * @version 1.0
 */
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dades-generals',
  standalone: true,
  imports: [
    MatCardModule, 
    MatListModule, 
    MatIconModule, 
    MatDividerModule
  ],
  templateUrl: './dades-generals.html',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  host: { '[@fadeIn]': 'true' }
})
export class DadesGenerals {

}
