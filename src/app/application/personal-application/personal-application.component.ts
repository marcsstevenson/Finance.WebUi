import { Component, OnInit } from '@angular/core';
import { AddressDetails } from "app/application";
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplication, PersonalApplicationDetails, PersonalApplicationFormItem } from "app/application/personal-application/personal-application";
import { PersonalApplicationService } from "app/application/personal-application.service";
import { FormComponent } from "app/application/form-component";
import { PersonalApplicationFormService } from "app/application/personal-application-forms/personal-application-form.service";
import { PersonalApplicationStatusOption } from "app/application/PersonalApplicationStatusOption";

@Component({
  selector: 'app-application',
  templateUrl: './personal-application.component.html',
  styleUrls: ['./personal-application.component.scss'],
  providers: [PersonalApplicationService]
})
export class PersonalApplicationComponent extends FormComponent implements OnInit {
  private selectOptions: Array<any>;
  private personalApplication: PersonalApplication = null;
  private forms: Array<PersonalApplicationFormItem> = null;
  private customerId: string = null;
  private dealId: string = null;

  private personalApplicationStatusOptions: Array<PersonalApplicationStatusOption>;
  // private 

  constructor(
    route: ActivatedRoute,
    router: Router,
    private _personalApplicationService: PersonalApplicationService,
    personalApplicationFormService: PersonalApplicationFormService) {
    super(route, router, personalApplicationFormService)
  }

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

    this.init();

    if (!this.isNew) {
      this.load(this.personalApplicationId);
    }
    else {
      this.personalApplication = new PersonalApplication()
      this.forms = [];
    }
  }

  back() {
    this.router.navigateByUrl('/personal-applications');
  }

  private load(id: string) {
    //Ensure that we have personalApplicationStatusOptions
    this._personalApplicationService.getPersonalApplicationStatusOptions()
      .then((personalApplicationStatusOptions: Array<PersonalApplicationStatusOption>) => {
        this.personalApplicationStatusOptions = personalApplicationStatusOptions;

        //Now load our model
        this._personalApplicationService.get(id)
          .then((personalApplicationDetails: PersonalApplicationDetails) => {
            this.personalApplication = personalApplicationDetails.JsonData;
            this.forms = personalApplicationDetails.Forms;

            this.customerId = personalApplicationDetails.CustomerId;
            this.dealId = personalApplicationDetails.DealId;
          })
          .catch((err) => {
            console.log(err); //todo: show the user a nice message
          });

      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
        return null;
      });
  }

  public viewCustomer(){    
    this.router.navigate(['/customer', this.customerId]);
  }

  public viewDeal(){    
    this.router.navigate(['/deal', this.dealId]);
  }

  saveAndBack() {
    this.save(null, null);
  }

  public getFormsOfType(formType: string): Array<PersonalApplicationFormItem> {
    let formsOfType = Array<PersonalApplicationFormItem>();

    if (this.forms === null) return formsOfType;

    for (var i = 0; i < this.forms.length; i++) {
      if (this.forms[i].FormType === formType)
        formsOfType.push(this.forms[i]);
    }

    return formsOfType;
  }

  public formSelected() {

  }

  public marineFormUrl = 'marine-form';

  addFormMarine() {
    this.save(this.marineFormUrl, null);
  }

  viewFormMarine(formId: string) {
    this.save(this.marineFormUrl, formId);
  }

  public motorcycleFormUrl = 'motorcycle-form';

  addFormMotorcycle() {
    this.save(this.motorcycleFormUrl, null);
  }

  viewFormMotorcycle(formId: string) {
    this.save(this.motorcycleFormUrl, formId);
  }

  public vehicleFormUrl = 'vehicle-form';

  addFormVehicle() {
    this.save(this.vehicleFormUrl, null);
  }

  viewFormVehicle(formId: string) {
    this.save(this.vehicleFormUrl, formId);
  }

  public privateSaleAgreementUrl = 'private-sale-agreement';

  addPrivateSaleAgreement() {
    this.save(this.privateSaleAgreementUrl, null);
  }

  viewPrivateSaleAgreement(formId: string) {
    this.save(this.privateSaleAgreementUrl, formId);
  }

  save(goToFormUrl: string, formId: string) {
    this._personalApplicationService.save(this.personalApplication)
      .then((response) => {
        if (!goToFormUrl) this.back();

        this.goToForm(goToFormUrl, response.CommittedId, formId);
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  goToForm(formUrl: string, personalApplicationId: string, formId: string) {
    var formIdValue = formId ? formId : 'new';

    this.router.navigate(['personal-application/', personalApplicationId, formUrl, formIdValue]);
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
