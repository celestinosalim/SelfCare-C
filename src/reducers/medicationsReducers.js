import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      return state.concat(action.medication);

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
