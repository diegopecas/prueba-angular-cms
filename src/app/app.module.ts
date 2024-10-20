import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router';
import { PaginaPrincipalModule } from './pagina-principal/pagina-principal.module';
import { PaginasModule } from './paginas/paginas.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './common/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PaginaPrincipalModule,
    PaginasModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule, 
    PipesModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
