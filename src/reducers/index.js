import { combineReducers } from 'redux';
import authReducers from './authReducers';
import medicationReducers from './medicationReducers';
// import insuranceReducers from './insuranceReducers';
// import providerReducers from './providerReducers';
// import behaviorReducers from './behaviorReducers';
// import conditionReducers from './conditionReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  medication: medicationReducers,
  // insurance: insuranceReducers,
  // provider: providerReducers,
  // behavior: behaviorReducers,
  // condition: conditionReducers
});

export default rootReducer;
