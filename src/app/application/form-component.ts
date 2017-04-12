import { Router, ActivatedRoute } from '@angular/router';
import { PersonalApplicationFormService } from "app/application/personal-application-forms/personal-application-form.service";
import { PersonalApplicationFormPost } from "app/application/personal-application-forms/personal-application-form-post";

export class FormComponent {

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public _personalApplicationFormService: PersonalApplicationFormService) { }


    public isNew = false;
    public personalApplicationId: string = null;
    public isNewForm = false;
    public formId: string = null;

    // public getIsNew(): boolean {
    //     return this.getPersonalApplicationId() === 'new';
    // }

    public getPersonalApplicationId(): string {
        return this.route.snapshot.params['id'];
    }

    public getFormId(): string {
        return this.route.snapshot.params['formId'];
    }

    public init() {
        let id = this.getPersonalApplicationId();

        if (id === 'new') {
            this.isNew = true;
        }
        else {
            this.isNew = false;
            this.personalApplicationId = id;
        }

        let formId = this.getFormId();

        if (formId === 'new') {
            this.isNewForm = true;
        }
        else {
            this.isNewForm = false;
            this.formId = formId;
        }
    }

    public savePersonalApplicationForm(personalApplicationFormPost: PersonalApplicationFormPost) {
        //Set the id values
        personalApplicationFormPost.PersonalApplicationId = this.personalApplicationId;
        personalApplicationFormPost.Id = this.formId;

        this._personalApplicationFormService.save(personalApplicationFormPost)
            .then((response) => {
                this.backToPersonalApplicaiton();
            })
            .catch((err) => {
                console.log(err); //todo: show the user a nice message
            });
    }

    public backToPersonalApplicaiton() {
        if (this.personalApplicationId !== null)
            this.router.navigate(['/personal-application', this.personalApplicationId]);
    }

    public delete() {
        if(this.formId === null)
            this.backToPersonalApplicaiton();

        this._personalApplicationFormService.delete(this.formId)
            .then((response) => {
                this.backToPersonalApplicaiton();
            })
            .catch((err) => {
                console.log(err); //todo: show the user a nice message
            });
    }
}