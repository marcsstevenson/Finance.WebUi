import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

declare let google: any;

export class AddressDetail {
  constructor(
    private streetNumber: string,
    private streetName: string,
    private suburb: string,
    private city: string,
    private state: string,
    private country: string,
    private postCode: string
    ) {}
}

@Component({
  moduleId: module.id,
  selector: 'fwui-address-finder',
  templateUrl: 'address-finder.component.html',
  styleUrls: ['address-finder.component.css']
})
export class FinanceWebUiAddressFinderComponent implements OnInit {

  public addressDetail = {};
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
    street_number: 'streetNumber',
    route: 'streetName',
    sublocality_level_1: 'suburb',
    locality: 'city',
    administrative_area_level_1: 'state',
    country: 'country',
    postal_code: 'postCode'
  };

  @ViewChild('searchInput') searchInput: ElementRef;

  @ViewChild('streetInput') streetInput: ElementRef;

  constructor() {
    // this.initAutocomplete();
  }
  OnInit() {

  }

  // ngAfterViewInit() {
  //   this.initAutocomplete();
  // }

  ngOnInit() {
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
      // console.log('placeSearch string is: ', this.placeSearch);
      console.log('autocomplete: ', this.autocomplete);

      let place = this.autocomplete.getPlace();

      console.log('place detail: ', place);
      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
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
      this.streetInput.nativeElement.focus();
      console.log('The place object is: ', place);
    });
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