import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { Pregunta1Component } from './preguntas/pregunta1/pregunta1.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HomeComponent } from './preguntas/home/home.component';
import { Pregunta2Component } from './preguntas/pregunta2/pregunta2.component';
import { Pregunta3Component } from './preguntas/pregunta3/pregunta3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    {path: "login", component: LoginComponent},
    {path: "preguntas", component: PreguntasComponent,
        canActivate: [authGuard],
        children: [
            {path: "home", component: HomeComponent},
            {path: "pregunta1", component: Pregunta1Component},            
            {path: "pregunta2", component: Pregunta2Component},
            {path: "pregunta3", component: Pregunta3Component}
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}

];
