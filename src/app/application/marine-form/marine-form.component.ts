import { Component, OnInit } from '@angular/core';
import { FormComponent } from "app/application/form-component";
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplicationFormService } from "app/application/personal-application-forms/personal-application-form.service";
import { MarineFormPost } from "app/application/marine-form/marine-form-post";
import { FinancialDetail } from "app/application/financial-detail";
import { VehicleVendorDetails } from "app/shared/components/vendor-detail/vehicle-vendor-detail";

@Component({
  selector: 'app-marine-form',
  templateUrl: './marine-form.component.html',
  styleUrls: ['./marine-form.component.scss']
})
export class MarineFormComponent extends FormComponent implements OnInit {

  private marineForm = {
    Vendor: new VehicleVendorDetails(),
    FiancedMarines: [
      {
        MarineType: '',
        Price: '',
        Condition: '',
        Year: '',
        Make: '',
        Model: '',
        HullSerialNumber: '',
      }
    ],
    FinancedMotors: [
      {
        Price: '',
        Condition: '',
        Type: '',
        Year: '',
        Make: '',
        Model: '',
        EngineSize: '',
        EngineSerialNumber: ''
      }
    ],
    FinancedTrailers: [
      {
        MarineType: '',
        Type: '',
        Price: '',
        Year: '',
        Registration: '',
        TrailerSerialNumber: ''
      }
    ],
    TradeInMarines: [
      {
        MarineType: '',
        Year: '',
        Make: '',
        Model: '',
        Registration: '',
        EngineType: '',
        EngineSize: '',
        SettlementTo: '',
        Balance: '',
        ValieTo: '',
        NetTradeValue: ''
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
  }

  private load(id: string) {
    this._personalApplicationFormService.get(id)
      .then((form) => {
        this.marineForm = form;
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  public save() {
    let marineFormPost = new MarineFormPost(this.marineForm);

    //Let the super function take care of everything
    this.savePersonalApplicationForm(marineFormPost);
  }
  
  updateFinancedMarine(receivedValue) {
    this.marineForm.Vendor = receivedValue;
    console.log('Current Vendor details', this.marineForm.Vendor);
  }

  updateTradeInMarine(receivedValue) {
    // this.marineForm.TradeInMarines = receivedValue;
    // console.log('Current Vendor details', this.marineForm.TradeInMarines);
  }

  updateMarineMotor(receivedValue) {
    // this.marineForm.FinancedMotors = receivedValue;
    // console.log('Current Vendor details', this.marineForm.FinancedMotors);
  }

  updateMarineTrailer(receivedValue) {
    // this.marineForm.FinancedTrailers = receivedValue;
    // console.log('Current Vendor details', this.marineForm.FinancedTrailers);
  }

  updateMarineForm(receivedValue) {
    // this.marineForm.FinancialDetail = receivedValue;
    // console.log('Current Vendor details', this.marineForm.Vendor);
  }
}