import { PersonalApplicationFormPost } from "app/application/personal-application-forms/personal-application-form-post";

export class VehicleFormPost extends PersonalApplicationFormPost {
    constructor(form: any){
        super();

        this.Form = form;
        this.FormType = 'Vehicle';
        this.SchemaVersion = '1.0';
    }
}