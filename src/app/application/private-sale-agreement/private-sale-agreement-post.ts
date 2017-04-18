import { PersonalApplicationFormPost } from "app/application/personal-application-forms/personal-application-form-post";

export class PrivateSaleAgreementFormPost extends PersonalApplicationFormPost {
    constructor(form: any){
        super();

        this.Form = form;
        this.FormType = 'PrivateSaleAgreement';
        this.SchemaVersion = '1.0';
    }
}