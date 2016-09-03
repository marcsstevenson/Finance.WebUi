import { RouterConfig } from '@angular/router';

import { DealersComponent } from './index';
import { DealerDetailComponent } from './index';

export const DealershipRoute: RouterConfig = [
    {
        path: 'dealership',
        component: DealersComponent
    },
    {
        path: 'dealership/:id',
        component: DealerDetailComponent
    }
];
