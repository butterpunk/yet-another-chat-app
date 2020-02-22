import { db } from "../firebase/firebase";


export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

const requestCreateUser = () => {
  return {
    type: CREATE_USER_REQUEST
  };
};

const receiveCreateUser = user => {
  return {
      type: CREATE_USER_SUCCESS,
      user
  };
};

const createUserError = () => {
  return {
    type: CREATE_USER_FAILURE
  };
};

export const createUser = (name, avatar) => dispatch => {
  dispatch(requestCreateUser());

  db.collection("users").add({
      name,
      avatar,
  })
  .then(function(docRef) {
    console.log(docRef);
    dispatch(receiveCreateUser({name, avatar, id: docRef.id}));
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
      dispatch(createUserError(error));
  });
};