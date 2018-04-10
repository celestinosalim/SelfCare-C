import { combineReducers } from 'redux';
import authReducers from './authReducers';
import medicationsReducers from './medicationsReducers';
import medicationFormDataReducers from './medicationFormDataReducers';
import insurancesReducers from './insurancesReducers';
import insuranceFormDataReducers from './insuranceFormDataReducers';
import providersReducers from './providersReducers';
// import behaviorReducers from './behaviorsReducers';
// import conditionReducers from './conditionsReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  medications: medicationsReducers,
  medicationFormData: medicationFormDataReducers,
  insurances: insurancesReducers,
  insuranceFormData: insuranceFormDataReducers,
  providers: providersReducers,
  // behavior: behaviorReducers,
  // condition: conditionReducers
});

export default rootReducer;
