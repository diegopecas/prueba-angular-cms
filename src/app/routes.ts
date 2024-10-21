import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { PaginasComponent } from "./paginas/paginas.component";
import { PaginaEventosComponent } from "./pagina-eventos/pagina-eventos.component";
import { NotFoundComponent } from "./transversales/not-found/not-found.component";

export const routes: Routes = [
    { path: '', redirectTo: 'principal', pathMatch:'full' },
    { path: 'principal', component: PaginaPrincipalComponent },
    { path: 'paginas', component: PaginasComponent },
    { path: 'eventos', component: PaginaEventosComponent },
    { path: '**', component: NotFoundComponent }
];
