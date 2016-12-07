import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './index';

const loginRoute: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

export const LoginRoute: ModuleWithProviders = RouterModule.forChild(loginRoute);

