import { Routes } from '@angular/router';
import { PermitComponent } from './permit/permit.component';

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
