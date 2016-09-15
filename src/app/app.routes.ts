import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authProviders } from './shared/services/index';

const routes: Routes = [
    // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any [] = [
  authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
