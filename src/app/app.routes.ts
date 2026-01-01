import { Routes } from '@angular/router';
import { LlistaEmissions } from './components/llista-emissions/llista-emissions';
import { DetallEmissio } from './components/detall-emissio/detall-emissio';
import { DadesGenerals } from './components/dades-generals/dades-generals';

export const routes: Routes = [
    { path: 'llista', component: LlistaEmissions },
    { path: 'detall/:id', component: DetallEmissio },
    { path: 'dades-generals', component: DadesGenerals },
    // Redireccions
    { path: '', redirectTo: '/llista', pathMatch: 'full' },
    { path: '**', redirectTo: '/llista' } // Ruta per defecte per a URLs no trobades
];
