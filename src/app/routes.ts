import { ApplicationConfig } from "@angular/core";
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { PaginasComponent } from "./paginas/paginas.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '/principal', component: PaginaPrincipalComponent },
    { path: '/paginas', component: PaginasComponent },
    { path: '**', component: AppComponent }
];
