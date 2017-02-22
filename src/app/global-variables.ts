'use strict';
import * as moment from 'moment';

export const GlobalVarables = Object.freeze({
    // BASE_API_URL: 'http://platinumapi.azurewebsites.net/',
    // BASE_API_URL: 'http://192.168.1.181:1319/',
    BASE_API_URL: 'http://localhost:1319/',
    MIN_BIRTH_DATE: moment('1900-01-01').utc(),
    SORT_ASC: 'asc'
});

