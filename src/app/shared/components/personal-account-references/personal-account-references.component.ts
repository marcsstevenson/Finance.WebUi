import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonalAccountReferenceDetail} from 'app/shared'

@Component({
  selector: 'fwui-personal-account-references',
  templateUrl: './personal-account-references.component.html',
  styleUrls: ['./personal-account-references.component.css']
})
export class FinanceWebUiPersonalAccountReferencesComponent implements OnInit {

  @Input()
  personalAccountReferences: Array<PersonalAccountReferenceDetail> = [];

  @Output() changed = new EventEmitter();

  expanded : boolean = true;

  public toggleExpanded() : void{
    this.expanded = !this.expanded;
  }
  constructor() { }

  ngOnInit() {
  }
  
  public personalAccountReferenceDetailChanged($event){
    this.changed.emit($event);
  }

  public AddPersonalAccountReference() {
    this.personalAccountReferences.push(new PersonalAccountReferenceDetail());
  }

  public DeletePersonalAccountReference(index) {
    if (index > -1) {
      this.personalAccountReferences.splice(index, 1);
    }
  }
}
