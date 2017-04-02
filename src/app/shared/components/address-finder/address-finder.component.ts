import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

declare let google: any;

export class AddressDetail {
  constructor(
    private StreetNumber: string,
    private StreetName: string,
    private Suburb: string,
    private City: string,
    private State: string,
    private Country: string,
    private PostCode: string
    ) {}
}

@Component({
  //moduleId: module.id,
  selector: 'fwui-address-finder',
  templateUrl: './address-finder.component.html',
  styleUrls: ['./address-finder.component.scss']
})
export class FinanceWebUiAddressFinderComponent implements OnInit {

  @Input()
  addressDetail = {};

  @Output() changed = new EventEmitter();

  public placeSearch: string;
  public autocomplete: any = {};
  public componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    sublocality_level_1: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  private googleAddressPropMapper = {
    street_number: 'StreetNumber',
    route: 'StreetName',
    sublocality_level_1: 'Suburb',
    locality: 'City',
    administrative_area_level_1: 'State',
    country: 'Country',
    postal_code: 'PostCode'
  };

  @ViewChild('searchInput') searchInput: ElementRef;

  @ViewChild('streetInput') streetInput: ElementRef;

  constructor(
    private _zone: NgZone
  ) {

  }
  OnInit() {
  }

  ngOnInit() {
    //2017.03.26 MS - this is throwing an exception on route change (eg, saving a file during dev)
    //It appears to be a race condition whereby the google API is initialised before this is called when the page is loaded from scratch
    //but the google API is not initialised on route change. Commented out so that I can work on the form
    this.initAutocomplete();
  }

  searchAddress() {

  }

  initAutocomplete() {    
    let that = this;
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    this.autocomplete = new google.maps.places.Autocomplete(
      this.searchInput.nativeElement,
      { types: ['geocode'] })
    ;

    this.getLocation();

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    // Have to write the call back function here instead of call this.fillInAddress. Calling it outside has scope issue which
    // is unclear to me at the time of writing this. 
    this.autocomplete.addListener('place_changed', () => {

      this._zone.run(() => {
        // console.log('placeSearch string is: ', this.placeSearch);
        console.log('autocomplete: ', this.autocomplete);

        let place = this.autocomplete.getPlace();

        console.log('place detail: ', place);
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.

        this.clearOldAddressDetails();

        for (let i = 0; i < place.address_components.length; i++) {
          let addressType = place.address_components[i].types[0];
          if (this.componentForm[addressType]) {
            let googlePropName = this.componentForm[addressType];
            let val = place.address_components[i][googlePropName];

            let addressDetailProp = this.googleAddressPropMapper[addressType];
            this.addressDetail[addressDetailProp] = val;
          }
        }
        
        this.searchInput.nativeElement.value = '';

        this.changed.emit(this.addressDetail);

        console.log('The place object is: ', place);
      });
    });
  }

  clearOldAddressDetails () {
    for (let property in this.addressDetail) {
      if (this.addressDetail.hasOwnProperty(property)) {
        this.addressDetail[property] = '';
      }
    }
  }

  fillInAddress(autocomplete, placeSearch) {
    // Get the place details from the autocomplete object.
    this.placeSearch = placeSearch;
    this.autocomplete = autocomplete;
    console.log('placeSearch string is: ', this.placeSearch);

    console.log('autocomplete: ', this.autocomplete);
    let place = this.autocomplete.getPlace();
    // console.log('placeSearch string is: ', this.placeSearch);

    console.log('The place object is: ', place);

    // for (var component in componentForm) {
    //   document.getElementById(component).value = '';
    //   document.getElementById(component).disabled = false;
    // }

    // // Get each component of the address from the place details
    // // and fill the corresponding field on the form.
    // for (let i = 0; i < place.address_components.length; i++) {
    //   let addressType = place.address_components[i].types[0];
    //   if (componentForm[addressType]) {
    //     let val = place.address_components[i][componentForm[addressType]];
    //     document.getElementById(addressType).value = val;
    //   }
    // }
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      let circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      this.autocomplete.setBounds(circle.getBounds());
    });
  }
}
