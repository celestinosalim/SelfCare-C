import * as types from '../actions/actionTypes';

let id = 0;

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      return state.concat(action.medication);

    // case types.UPDATE_MEDICATION:
    //   return state.concat(action.medication);

    case types.DELETE_MEDICATION:
      return state.filter(medications => medications.id !== action.id)
    default:
      return state;
  }
}

//Testing reducer
// const medicationsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "REQUEST_MEDICATIONS":
//       return action.medications;
//     default:
//       return state;
//   }
// }

// medications = medicationsReducer(undefined, {
//   type: '@@INIT'
// })

// medications = medicationsReducer(undefined, {
//   type: 'REQUEST_MEDICATIONS',
//   medications: { name: 'med c' }
// })
//
// medications = medicationsReducer(undefined, {
//   type: 'REQUEST_MEDICATIONS',
//   medications: [{ name: 'med c' }, { name: 'med d' }]
// })

// const medications = (state = [], action) => {
//   switch (action.type) {
//     case "REQUEST_MEDICATIONS":
//       return action.medications;
//     default:
//       return state;
//   }
// }

// const reducers = combineReducers({
//   medications: medications
// })
