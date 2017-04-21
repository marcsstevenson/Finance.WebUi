import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonalApplicationFormService } from "app/application";
import { FormComponent } from "app/application/form-component";
import { PrivateSaleAgreementFormPost } from "app/application/private-sale-agreement/private-sale-agreement-post";
import { PrivateSalesAgreement } from "app/application/private-sale-agreement/private-sale-agreement";
import { Address } from "app/application/address";

@Component({
  //moduleId: module.id,
  selector: 'app-private-sale-agreement',
  templateUrl: './private-sale-agreement.component.html',
  styleUrls: ['./private-sale-agreement.component.scss']
})
export class PrivateSaleAgreementComponent extends FormComponent implements OnInit {

  form = new PrivateSalesAgreement();
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
    else {

    }
  }

  private load(id: string) {
    this._personalApplicationFormService.get(id)
      .then((form) => {
        this.form = form;
        this.updateBalancePayable();
      })
      .catch((err) => {
        console.log(err); //todo: show the user a nice message
      });
  }

  public save() {
    let marineFormPost = new PrivateSaleAgreementFormPost(this.form);

    //Let the super function take care of everything
    this.savePersonalApplicationForm(marineFormPost);
  }

  public vendorAddressChanged($event: Address) {
    this.form.VendorDetails.Address = $event;
  }


  public updateBalancePayable() {
    var balance = 0;

    if (this.form.AgreedSalePrice)
      balance += +this.form.AgreedSalePrice;

    if (this.form.Transport)
      balance += +this.form.Transport;

    if (this.form.Extras)
      balance += +this.form.Extras;

    if (this.form.Deposit)
      balance -= +this.form.Deposit;

    this.form.Balance = balance;
  }
}
