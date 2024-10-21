import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RedesSocialesComponent } from '../transversales/redes-sociales/redes-sociales.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { EventosComponent } from './componentes/eventos/eventos.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule, RedesSocialesComponent, NoticiasComponent, EventosComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
