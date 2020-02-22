import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import uuidv1  from 'uuid/v1';

import rootReducer from "./reducers";


const configureStore = () => {
    let middlewares = [thunk];
    let store = createStore(
        rootReducer, 
        {}, 
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    return store;
}

const store = configureStore();
export default store;