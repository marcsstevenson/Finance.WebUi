'use strict';

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  "@angular": "vendor/@angular",
  "rxjs": "vendor/rxjs",
  'moment': 'vendor/moment/moment.js',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'ng2-table': 'vendor/ng2-table',
  'tinymce': 'vendor/tinymce',
  'angular2-data-table': 'vendor/angular2-data-table/release',
};

/** User packages configuration. */
const packages: any = {
  "@angular/core": {
    main: "bundles/core.umd.js" //use the ESM entry point for bundling tools
  },
  "@angular/common": {
    main: "bundles/common.umd.js" //use the ESM entry point for bundling tools
  },
  "@angular/compiler": {
    main: "bundles/compiler.umd.js" //use the ESM entry point for bundling tools
  },
  "@angular/forms": {
    main: "bundles/forms.umd.js"
  },
  "@angular/http": {
    main: "bundles/http.umd.js"
  },
  "@angular/platform-browser": {
    main: "bundles/platform-browser.umd.js" //use the ESM entry point for bundling tools
  },
  "@angular/platform-browser-dynamic": {
    main: "bundles/platform-browser-dynamic.umd.js" //use the ESM entry point for bundling tools
  },
  "@angular/router": {
    main: "bundles/router.umd.js" //use the ESM entry point for bundling tools
  },
  'Rx': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'Rx.js'
  },
  'moment': {
    format: 'cjs'
  },
  'ng2-bootstrap': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
  },
  'ng2-table': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-table.js'
  },
  'tinymce': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'tinymce.js'
  },
  'angular2-data-table': {
    main: 'angular2-data-table.js'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  

  // App specific barrels.
  'app',
  'app/finance-web-ui',
  'app/customer',
  'app/customer/customer-detail',
  'app/dealer',
  'app/dealer/dealer-detail',
  'app/home',
  'app/login',
  'app/shared',
  'app/shared/components/header',
  'app/shared/components/footer',
  'app/shared/components/navigation',
  'app/shared/services',
  'app/customer/customer-detail',
  'app/deal/deals',
  'app/deal/deal-detail',
  'app/shared/components/history',
  'app/shared/components/time-line',
  'app/customer/customer-detail/customer-deals/customer-deals',
  'app/shared/directives/tinymce',
  'app/finance-company',
  'app/finance-company/finance-companies',
  'app/finance-company/finance-company-detail',
  'app/application',
  'app/shared/components/select',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
