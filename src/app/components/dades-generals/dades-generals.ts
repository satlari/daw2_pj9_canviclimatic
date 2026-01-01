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

@Component({
  selector: 'app-dades-generals',
  standalone: true,
  imports: [
    MatCardModule, 
    MatListModule, 
    MatIconModule, 
    MatDividerModule
  ],
  templateUrl: './dades-generals.html'
})
export class DadesGenerals {

}
