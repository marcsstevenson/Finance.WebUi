import { PersonalApplicationFormPost } from "app/application/personal-application-forms/personal-application-form-post";

export class MarineFormPost extends PersonalApplicationFormPost {
    constructor(form: any){
        super();

        this.Form = form;
        this.FormType = 'Marine';
        this.SchemaVersion = '1.0';
    }
}