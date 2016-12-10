import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './login';
import { authProviders } from './shared/services/index';


const appRoutes: Routes = [
  // { path: '**', component: PageNotFoundComponent }
  // { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: 'login' }
];

export const appRoutingProviders: any[] = [
  authProviders
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
