import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent, LoginRoutingModule }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, LoginRoutingModule],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ],
  providers: [],
})
export class LoginModule { }
