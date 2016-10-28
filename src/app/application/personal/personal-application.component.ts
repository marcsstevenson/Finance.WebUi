import { Component, OnInit } from '@angular/core';
// import { }


@Component({
  moduleId: module.id,
  selector: 'app-application',
  templateUrl: 'personal-application.component.html',
  styleUrls: ['personal-application.component.css']
})
export class PersonalApplicationComponent implements OnInit {

  private selectOptions: Array<any>;
  constructor() { }

  ngOnInit() {

    this.selectOptions = [
      {
        name: 'Personal Use',
        value: 1
      },
      {
        name: 'Business Use',
        value: 2
      },
      {
        name: 'Sole Trader',
        value: 3
      }
    ]
  }

  updateSelect(event) {
    console.log('The selected value is:', event);
  }

}
