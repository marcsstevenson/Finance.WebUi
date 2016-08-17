import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersRoute } from './customer/index';
import { DealersRoute } from './dealer/index';
import { HomeRoute } from './home/index';
import { LoginRoute } from './login/index';
import { DealRoute } from './deal/index';
import { AUTH_PROVIDERS } from './shared/services/index';

const routes: RouterConfig = [
    ...HomeRoute,
    ...CustomersRoute,
    ...DealersRoute,
    ...DealRoute,
    ...LoginRoute
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AUTH_PROVIDERS
];
