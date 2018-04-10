import { combineReducers } from 'redux';
import authReducers from './authReducers';
import medicationsReducers from './medicationsReducers';
import medicationFormDataReducers from './medicationFormDataReducers';
import insurancesReducers from './insurancesReducers';
import insuranceFormDataReducers from './insuranceFormDataReducers';

// import providerReducers from './providerReducers';
// import behaviorReducers from './behaviorReducers';
// import conditionReducers from './conditionReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  medications: medicationsReducers,
  medicationFormData: medicationFormDataReducers,
  insurances: insurancesReducers,
  insuranceFormData: insuranceFormDataReducers,
  // provider: providerReducers,
  // behavior: behaviorReducers,
  // condition: conditionReducers
});

export default rootReducer;
