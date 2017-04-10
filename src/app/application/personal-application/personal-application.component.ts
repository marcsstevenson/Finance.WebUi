import { Component, OnInit } from '@angular/core';
import { AddressDetails } from "app/application";
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplication } from "app/application/personal-application/personal-application";
import { PersonalApplicationService } from "app/application/personal-application.service";

@Component({
  selector: 'app-application',
  templateUrl: './personal-application.component.html',
  styleUrls: ['./personal-application.component.scss'],
  providers: [PersonalApplicationService]
})
export class PersonalApplicationComponent implements OnInit {
  private selectOptions: Array<any>;
  private personalApplication: PersonalApplication;
  // private 
  private isNew = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _personalApplicationService: PersonalApplicationService) { }

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
    ];

    let id = this.route.snapshot.params['id'];
    this.isNew = id === 'new';

    if (!this.isNew) {
      // this.load(customerId);
    }
    else
      this.personalApplication = new PersonalApplication()
  }

  back() {
        this.router.navigateByUrl('/personal-applications');
  }

  save() {
    this._personalApplicationService.save(this.personalApplication)
      .then((response) => {
        console.log('Saved successfully: ', response);
        this.router.navigate(['/customer', response.CommittedId]);
        this.personalApplication.Id = response.CommittedId;
        
        this.isNew = false;
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  delete() {
    this._personalApplicationService.delete(this.personalApplication.Id)
      .then((response) => {
        console.log('Deleted successfully: ', response);
        this.back();
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  spouceDisplayed() {
    return this.personalApplication.ApplicationType === 'Joint';
  }

  updateApplicantDetails($event) {

  }

  updateApplicantReferences($event) {

  }

  updateApplicantAccountReferences($event) {

  }

  updateCurrentAddress($event) {

  }
  updateSelect(event) {
    console.log('The selected value is:', event);
  }

  public expandedFinancials = true;
  toggleExpandedFinancials() {
    this.expandedFinancials = !this.expandedFinancials;
  }
}
