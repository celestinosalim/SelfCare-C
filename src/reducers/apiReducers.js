import * from './actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MEDICATIONS:
      return {

      };
    case ADD_MEDICATION:
      return {

      };
    case REQUEST_BEHAVIORS:
      return {

      };
    case CREATE_BEHAVIORS:
      return {

      };
    default:
      return state;
  }
}
