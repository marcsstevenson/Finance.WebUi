export * from './authentication.service';
export * from './authorisation.service';
export * from './util.service';

import { AuthenticationService } from './authentication.service';
import { AuthorisationService } from './authorisation.service';

export const authProviders = [
    AuthenticationService,
    AuthorisationService
];
