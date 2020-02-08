import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{ 
    path: '',
    component: PagesComponent,
    children: [
        {path: '', component: ProfileComponent}
    ]
}];

export const PAGES_ROUTES = RouterModule.forChild(routes);