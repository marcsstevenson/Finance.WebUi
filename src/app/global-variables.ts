'use strict';
import * as moment from 'moment';

export const GlobalVarables = Object.freeze({
    BASE_API_URL: 'http://financeplatform.azurewebsites.net/',
    // BASE_API_URL: 'http://192.168.1.185:1319/',
    MIN_BIRTH_DATE: moment('1900-01-01').utc()
});

