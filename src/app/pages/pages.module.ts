// Modulos de Angular
import { NgModule } from '@angular/core';

// Modulos propios
import { SharedModule } from '../shared/shared.module';

// Componente principal del modulo
import { PagesComponent } from './pages.component';

// Paginas principales del modulo
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Paginas del modulo
import { ProfileComponent } from './profile/profile.component';

// Rutas del modulo
import { PAGES_ROUTES } from './pages-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
  ],
  exports: [
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
