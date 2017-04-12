import { PersonalApplicationFormPost } from "app/application/personal-application-forms/personal-application-form-post";

export class MotorcycleFormPost extends PersonalApplicationFormPost {
    constructor(form: any){
        super();

        this.Form = form;
        this.FormType = 'Motorcycle';
        this.SchemaVersion = '1.0';
    }
}