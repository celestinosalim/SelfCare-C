import * from './actionTypes'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {

      };
    case AUTH_ERROR:
      return {

      };
    case AUTH_SUCCESS:
      return {

      };
    case LOGOUT:
      return {
      
      };
    default:
      return state;
  }
}
