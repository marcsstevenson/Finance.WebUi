import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './index';

const loginRoute: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

export const LoginRoute = RouterModule.forChild(loginRoute);

