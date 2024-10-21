import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

  noticias = [
    {
      id:1,
      titulo: 'Inicia el proceso de revisión de procedimientos excluidos del financiamiento con recursos públicos de salud',
      fecha: '19-oct-2024',
      descripcion: `El Ministerio de Salud y Protección Social informa a todos los actores
          del Sistema General de Seguridad Social en Salud que, conforme a lo
          establecido en el artículo 15 de la Ley 1751 de 2015 y el artículo 32
          de la Resolución 318 de 2023, desde el 15 de octubre...`
    },
    {
      id:2,
      titulo: 'Inicia el proceso de revisión de procedimientos excluidos del financiamiento con recursos públicos de salud',
      fecha: '19-oct-2024',
      descripcion: `El Ministerio de Salud y Protección Social informa a todos los actores
          del Sistema General de Seguridad Social en Salud que, conforme a lo
          establecido en el artículo 15 de la Ley 1751 de 2015 y el artículo 32
          de la Resolución 318 de 2023, desde el 15 de octubre...`
    },
  ]

}
