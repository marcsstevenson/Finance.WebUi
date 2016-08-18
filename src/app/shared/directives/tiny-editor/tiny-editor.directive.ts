import { Directive } from '@angular/core';
declare var tinymce: any;

@Directive({
  inputs: ['htmlEditor'],
  selector: '[htmlEditor]'
})
export class TinyEditor {
  constructor() {
    tinymce.init({
      selector: 'textarea.note',
      schema: 'html5'
    });
  }

}
