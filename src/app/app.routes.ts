import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersRoute } from './customer/index';
import { DealersRoute } from './dealer/index';
import { HomeRoute } from './home/index';

const routes: RouterConfig = [
    ...HomeRoute,
    ...CustomersRoute,
    ...DealersRoute
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
