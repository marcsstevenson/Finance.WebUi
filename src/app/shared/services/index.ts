export * from './authentication.service';
export * from './authorisation.service';

import { AuthenticationService } from './authentication.service';
import { AuthorisationService } from './authorisation.service';

export const AUTH_PROVIDERS = [
    AuthenticationService,
    AuthorisationService
];
