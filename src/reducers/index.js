import { combineReducers } from 'redux';
import authReducers from './authReducers';
import medicationsReducers from './medicationsReducers';
import medicationFormDataReducers from './medicationFormDataReducers';

// import insuranceReducers from './insuranceReducers';
// import providerReducers from './providerReducers';
// import behaviorReducers from './behaviorReducers';
// import conditionReducers from './conditionReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  medications: medicationsReducers,
  medicationFormData: medicationFormDataReducers,
  // insurance: insuranceReducers,
  // provider: providerReducers,
  // behavior: behaviorReducers,
  // condition: conditionReducers
});

export default rootReducer;
