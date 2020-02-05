import { addMessage, ADD_MESSAGE } from './actions';
import { createStore } from 'redux';

//These are side effects that I need to move somewhere else; 
const io = require('socket.io-client');
const socket = io('http://localhost:3005');
socket.on('chat message', function(msg){
    store.dispatch(addMessage(msg));
});

let initialState = ['Hi this is your first message'];
const mesages = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}

const store = createStore(mesages, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
