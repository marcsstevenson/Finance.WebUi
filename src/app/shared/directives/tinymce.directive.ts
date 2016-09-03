import { Component, Provider, forwardRef, Input, Directive} from "@angular/core";
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR,
  CORE_DIRECTIVES, DefaultValueAccessor
} from "@angular/common";


const TINY_MCE_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => TinyMceValueAccessorDirective), multi: true}
  );

@Directive({
  selector: 'textarea[tinymce]',
  host: { '(keyup)': 'doOnChange($event.target)' },
  providers: [TINY_MCE_VALUE_ACCESSOR]
})
export class TinyMceValueAccessorDirective extends DefaultValueAccessor {
  @Input()
  tinymce: any;

  onChange = (_) => {};
  onTouched = () => {};

  writeValue (value: any) {
    if(value != null) {
      super.writeValue(value.toString());
    }
  }

  doOnChange() {
    this.onChange(this.tinymce.activeEditor.getContent());
  }

}
