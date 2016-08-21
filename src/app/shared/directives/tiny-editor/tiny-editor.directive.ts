import { Directive } from '@angular/core';
declare var tinymce: any;

@Directive({
  inputs: ['htmlEditor'],
  selector: '[htmlEditor]'
})
export class TinyEditor {
  constructor() {
    tinymce.init({
      selector: '#test',
      schema: 'html5'
    });
  }

}
