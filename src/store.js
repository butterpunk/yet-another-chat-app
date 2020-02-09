import { createStore, combineReducers } from 'redux';
import messages from './messages/redux/reducer';
const uuidv1 = require('uuid/v1');

//These are side effects that I need to move somewhere else; 
// const io = require('socket.io-client');
// const socket = io('http://localhost:3005');

const App = combineReducers({messages});

let initialState = {
    messages: {
        [uuidv1()]: { body: 'Hi, this is your first message' }
    }
};
//Store Stuff
const configureStore = () => {
    //side effect -> we want to subscribe to chat messages
    // socket.on('chat message', function(msg){
    //     store.dispatch(addMessage(msg));
    // });
    let store = createStore(App, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

const store = configureStore();
export default store;