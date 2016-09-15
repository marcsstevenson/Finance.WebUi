import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent, LoginRoute }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, LoginRoute],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ],
  providers: [],
})
export class LoginModule { }
