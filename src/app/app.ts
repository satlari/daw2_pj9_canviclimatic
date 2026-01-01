import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacio } from './components/navegacio/navegacio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navegacio],
  templateUrl: './app.html',
})
export class App {
}
