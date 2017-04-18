import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonalApplicationFormService } from "app/application";
import { FormComponent } from "app/application/form-component";
import { PrivateSaleAgreementFormPost } from "app/application/private-sale-agreement/private-sale-agreement-post";
import { PrivateSalesAgreement } from "app/application/private-sale-agreement/private-sale-agreement";

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
    else{

    }
  }

  private load(id: string) {
    this._personalApplicationFormService.get(id)
      .then((form) => {
        this.form = form;
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

}
