import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { PipesModule } from './common/pipes/pipes.module';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./transversales/encabezado/encabezado.component";
import { PieComponent } from './transversales/pie/pie.component';
import { CabeceraComponent } from './transversales/cabecera/cabecera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EncabezadoComponent, PieComponent, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
/*
  nuevo = {
    columnas: 1,
    color: '#ffffff',
  };

  applyForm = new FormGroup({
    columnas: new FormControl(''),
    color: new FormControl(''),
  });

  bloques = [
    {
      id: 1,
      divs: [
        {
          id: 2,
          colorFondo: '#ff00ff',
          columnas: 12,
        },
        {
          id: 2,
          colorFondo: '#ff00aa',
          columnas: 10,
        },
        {
          id: 2,
          colorFondo: '#ff0088',
          columnas: 12,
        },
        {
          id: 2,
          colorFondo: '#ff0055',
          columnas: 9,
        },
        {
          id: 2,
          colorFondo: '#ff0011',
          columnas: 6,
        },
      ],
    },
    {
      id: 2,
      divs: [
        {
          id: 2,
          colorFondo: '#ffff00',
          columnas: 2,
        },
        {
          id: 2,
          colorFondo: '#ffffee',
          columnas: 9,
        },
        {
          id: 2,
          colorFondo: '#ffff44',
          columnas: 6,
        },
      ],
    },
  ];

  bloques2: any = [];

  submitApplication() {
    console.log(this.applyForm.value.columnas);
    console.log(this.applyForm.value.color);
    this.bloques2.push({
      columnas: this.applyForm.value.columnas,
      fondo: this.applyForm.value.color,
      valor:
        'nuevo ' +
        this.applyForm.value.columnas +
        ' ' +
        this.applyForm.value.color,
    });
  }

  async seleccionarItem(item: any) {
    this.item = item;
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: ['texto', 'imagen', 'video'],
      inputPlaceholder: 'Select an input',
      showCancelButton: true,
    });
    if (fruit) {
      switch (fruit) {
        case '0':
          this.nuevoTexto();
          break;
        case '1':
          this.nuevoImagen();
          break;
        case '2':
          break;
      }
    }
  }

  item: any = {};

  async nuevoImagen() {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
        });
        this.item.valor = '<img width="100%" src="' + e.target.result + '">';
      };
      reader.readAsDataURL(file);
    }
  }

  async nuevoTexto() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });
    if (text) {
      Swal.fire(text);
      this.item.valor = text;
    }
  }*/
}
