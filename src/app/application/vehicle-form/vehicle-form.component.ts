import { Component, OnInit } from '@angular/core';
import { FormComponent } from "app/application/form-component";
import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplicationFormService } from "app/application/personal-application-forms/personal-application-form.service";
import { VehicleFormPost } from "app/application/vehicle-form/vehicle-form-post";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent extends FormComponent implements OnInit {

  private vehicleForm = {
    Vendor: {
      VendorType: '',
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      Salesman: '',
      TradeMeUrl: ''
    },
    FiancedVehicles: [
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
        VehicleType: ''
      }
    ],
    TradeInVehicles: [
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
    FinancialDetail: {

    }
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
        this.vehicleForm = form;
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  public save() {
    let marineFormPost = new VehicleFormPost(this.vehicleForm);

    //Let the super function take care of everything
    this.savePersonalApplicationForm(marineFormPost);
  }

  updateVendor(receivedValue) {
    this.vehicleForm.Vendor = receivedValue;
    console.log('Current Vendor details', this.vehicleForm.Vendor);
  }

  updateFinancedVehicle (receivedValue) {
    // this.vehicleForm.
    console.log('Finance Vehicle received value', receivedValue);
  }

  updateTradeInVehicle (receivedValue) {
    console.log('Trade In Vehicle received value', receivedValue);
  }

  updateFinanceDetails (receivedValue) {
    console.log('Trade In Vehicle received value', receivedValue);
  }
}
