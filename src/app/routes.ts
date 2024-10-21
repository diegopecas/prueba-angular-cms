import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { PaginaPrincipalComponent } from "./components/pagina-principal/pagina-principal.component";
import { PaginasComponent } from "./components/paginas/paginas.component";
import { PaginaEventosComponent } from "./components/pagina-eventos/pagina-eventos.component";
import { NotFoundComponent } from "./components/transversales/not-found/not-found.component";

export const routes: Routes = [
    { path: '', redirectTo: 'principal', pathMatch:'full' },
    { path: 'principal', component: PaginaPrincipalComponent },
    { path: 'paginas', component: PaginasComponent },
    { path: 'eventos', component: PaginaEventosComponent },
    { path: '**', component: NotFoundComponent }
];
