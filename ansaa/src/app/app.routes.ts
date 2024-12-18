import { Routes } from '@angular/router';
import { PermitComponent } from './components/permit/permit.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'permit',
        pathMatch: 'full'
    },
    {
        path: 'permit',
        component:PermitComponent
    }

];
