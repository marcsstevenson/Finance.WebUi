import { Component, OnInit } from '@angular/core';
import { FormComponent } from "app/application/form-component";
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplicationFormService } from "app/application/personal-application-forms/personal-application-form.service";
import { MotorcycleFormPost } from "app/application/motorcycle-form/motorcycle-form-post";
import { FinancialDetail } from "app/application/financial-detail";
import { VehicleVendorDetails } from "app/shared/components/vendor-detail/vehicle-vendor-detail";

@Component({
  selector: 'app-motorcycle-form',
  templateUrl: './motorcycle-form.component.html',
  styleUrls: ['./motorcycle-form.component.css']
})
export class MotorcycleFormComponent extends FormComponent implements OnInit {

  private motorcycleForm = {
    Vendor: new VehicleVendorDetails(),
    FiancedMotorcycles: [
      {
        PurchaseType: '',
        Price: '',
        Condition: '',
        Imported: '',
        Year: '',
        Make: '',
        Model: '',
        EngineSize: '',
        Colour: '',
        Registration: '',
        MilageUnit: '',
        Milage: '',
        VehicleIdentificationNumber: '',
        MotorcycleType: ''
      }
    ],
    TradeInMotorcycles: [
      {
        Year: '',
        Make: '',
        Model: '',
        Registration: '',
        MilageUnit: '',
        Milage: '',
        TradeInValue: '',
        SettlementValue: '',
        Balance: '',
        ValidTo: '',
        NetValue: ''
      }
    ],
    FinancialDetail: new FinancialDetail()
  };

  constructor(
    route: ActivatedRoute,
    router: Router,
    personalApplicationFormService: PersonalApplicationFormService) {
    super(route, router, personalApplicationFormService);
  }

  ngOnInit() {
    this.init();

    if (!this.isNewForm) {
      this.load(this.formId);
    }
    else{

      // this.personalApplication = new PersonalApplication()      
    }
  }

  private load(id: string) {
    this._personalApplicationFormService.get(id)
      .then((form) => {
        this.motorcycleForm = form;
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  public save() {
    let marineFormPost = new MotorcycleFormPost(this.motorcycleForm);

    //Let the super function take care of everything
    this.savePersonalApplicationForm(marineFormPost);
  }
}