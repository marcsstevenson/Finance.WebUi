import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonalReferenceDetail} from 'app/shared'

@Component({
  selector: 'fwui-personal-references',
  templateUrl: './personal-references.component.html',
  styleUrls: ['./personal-references.component.css']
})
export class FinanceWebUiPersonalReferencesComponent implements OnInit {

  @Input() personalReferences: Array<PersonalReferenceDetail> = [];

  @Output() changed = new EventEmitter();
  
  expanded : boolean = true;

  public toggleExpanded() : void{
    this.expanded = !this.expanded;
  }

  constructor() { }

  ngOnInit() {
  }
  
  emit(){
    this.changed.emit(this.personalReferences);
  }

  personalReferenceDetailChanged($event) {
     this.emit();
  }

  public AddPersonalReference() {
    this.personalReferences.push(new PersonalReferenceDetail());
    this.changed.emit(this.personalReferences);
  }

  public DeletePersonalReference(index) {
    if (index > -1) {
      this.personalReferences.splice(index, 1);
    }
  }
}
