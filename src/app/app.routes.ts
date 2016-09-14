import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersRoute } from './customer/index';
import { DealershipRoute } from './dealer/index';
import { HomeRoute } from './home/index';
import { LoginRoute } from './login/index';
import { DealRoute } from './deal/index';
import { authProviders } from './shared/services/index';

const routes: Routes = [
    ...HomeRoute,
    ...CustomersRoute,
    ...DealershipRoute,
    ...DealRoute,
    ...LoginRoute
];

export const appRoutingProviders: any [] = [
  authProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
// export const APP_ROUTER_PROVIDERS = [
//     provideRouter(routes),
//     AUTH_PROVIDERS
// ];
