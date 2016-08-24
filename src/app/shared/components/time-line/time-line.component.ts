import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fwui-time-line',
  templateUrl: 'time-line.component.html',
  styleUrls: ['time-line.component.css']
})
export class FinanceWebUiTimeLineComponent implements OnInit {

  @Input() notes: Array<any>;
  @Input() myText: string;


  constructor() { }

  ngOnInit() {

    console.log('time line has been generated!');
    console.log(this.notes);
    // if (!this.notes) {
    //   this.notes = [{
    //     UserName: 'Default User',
    //     CreatedAt: new Date(),
    //     Content: '<h1>Default Header Content</h1>'
    //   }];
    // }
  }

}
