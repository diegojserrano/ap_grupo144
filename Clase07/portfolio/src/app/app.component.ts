import { Component } from '@angular/core';
import { Estudio } from 'src/estudio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  nombre = "Juan Perez"
  titulo = "Corredor de TC"

  intereses: String[] = ["Cocinar","Dormir","Programar","Tenis"]
  estudios: Estudio[] = [
    new Estudio("Bachiller","Secundaria","1994"),
    new Estudio("Tecnico en Alfombras","Terciario","1995-1999"),
    new Estudio("Licenciado en Lavarropas","Universidad","2000-2015"),
    new Estudio("Prog. Full Stack","AP","2022")

  ]

}
