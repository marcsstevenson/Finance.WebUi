import { RouterConfig } from '@angular/router';

import { DealersComponent } from './index';
import { DealerDetailComponent } from './index';

export const DealersRoute: RouterConfig = [
    {
        path: 'dealer',
        component: DealersComponent
    },
    {
        path: 'dealer/:id',
        component: DealerDetailComponent
    }
];
