import { Component, OnInit, Input } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'fwui-working-display',
  templateUrl: './working-display.component.html',
  styleUrls: ['./working-display.component.scss']
})
export class FinanceWebUiWorkingDisplayComponent implements OnInit {

  @Input() notes: Array<any>;
  @Input() myText: string;

  constructor() { }

  ngOnInit() {
  }

}
