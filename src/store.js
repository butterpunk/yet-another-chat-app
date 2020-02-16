import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import uuidv1  from 'uuid/v1';

import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

// import messages from './messages/redux/reducer';
// const App = combineReducers({messages});
let initialState = {
    messages: {
        [uuidv1()]: { body: 'Hi, this is your first message' }
    },
};
//Store Stuff
//,
const configureStore = () => {
    let middlewares = [thunk];
    let store = createStore(
        rootReducer, 
        initialState, 
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    store.dispatch(verifyAuth());
    return store;
}

const store = configureStore();
export default store;