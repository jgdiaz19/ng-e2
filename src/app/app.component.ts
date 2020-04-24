import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Jorge E Gonzalez Diaz';
  personajes = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot', 'BlackEye', 'Hulk', 'Vision'];
  PI = Math.PI;
}
