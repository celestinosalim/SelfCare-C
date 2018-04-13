import * as types from '../actions/actionTypes';

let id = 0;

export default (state = [], action) => {
  switch (action.type) {
    case types.REQUEST_MEDICATIONS:
      return action.medications;

    case types.ADD_MEDICATION:
      return [
        ...state,
        action.medication
      ]
      // id++;
      // const medication = Object.assign({}, action.medication, { id: id });
      // return state.concat(medication);

    // case types.SELECT_MEDICATION:
    //   const index = state.findIndex(item => item.id === action.medication.id);
    //   if (index > -1) {
    //     return state.map(item => {
    //       if (item.id === action.medication.id) return action.medication;
    //       return item;
    //     })
    //   } else {
    //     return [
    //       ...state,
    //       action.game
    //     ];
    //   }

    case types.UPDATED_MEDICATION:
      const medication = action.idea
      return state.map(meds => {
        if (meds.id === medication.id) return action.medication;
        return meds;
      });

    // case types.UPDATE_MEDICATION:
    //   return state.concat(action.medication);

    case types.DELETE_MEDICATION:
      const medications = state.filter(medication => medication.id !== action.id)
      return medications

    default:
      return state;
  }
}
