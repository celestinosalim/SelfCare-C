import { combineReducers } from 'redux';
import authReducers from './authReducers';
import medicationsReducers from './medicationsReducers';
import insurancesReducers from './insurancesReducers';
import providersReducers from './providersReducers';
import behaviorsReducers from './behaviorsReducers';
// import conditionReducers from './conditionsReducers';

const rootReducer = combineReducers({
  auth: authReducers,
  medications: medicationsReducers,
  insurances: insurancesReducers,
  providers: providersReducers,
  behaviors: behaviorsReducers,
  // condition: conditionReducers
});

export default rootReducer;
