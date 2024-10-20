import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { PieComponent } from './componentes/pie/pie.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    EncabezadoComponent,
    BannerComponent,
    MenuComponent,
    NoticiasComponent,
    EventosComponent,
    RedesSocialesComponent,
    PieComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PaginaPrincipalModule { }
