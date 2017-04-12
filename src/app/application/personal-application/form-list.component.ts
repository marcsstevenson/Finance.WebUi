import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplication, PersonalApplicationFormItem } from "app/application/personal-application/personal-application";

@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {
  @Input() title: string;
  // @Input() formType: string;
  @Input() forms: Array<PersonalApplicationFormItem>;
  @Output() selected = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  onSelect(id: string) {
    this.selected.emit(id);
  }
}
