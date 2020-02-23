import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
} from "../actions/";
  
export default (
    state = {
      // user: {
      //   avatar: "😍",
      //   id: "ocMWxz33RbQ5XLAFjwmb",
      //   name: "Da Dude 52",
      // },
      user: {},
      isUserCreated: true,
    },
    action
) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
              ...state,
              isLoggingIn: true,
              loginError: false
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isUserCreated: true,
                user: action.user
            };
        case CREATE_USER_FAILURE:
            return {
              ...state,
              isLoggingIn: false,
              isUserCreated: false,
              loginError: true
            };
        default:
            return state;
    }
}