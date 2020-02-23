import uuidv1 from 'uuid/v1';
import io from 'socket.io-client';
const socket = io('http://localhost:3005');
let firstMessageSent = false;
export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE'

export const addMessage = (payload) => {
    const ID = uuidv1()
    const {body, user, meta} = payload; 
    return{
        type: ADD_MESSAGE_SUCCESS,
        payload :  {
            [ID] : { body, user, meta }
        }
    }
};

export const createMessage = (payload) => dispatch => {
    if(!firstMessageSent){
        socket.emit('firstMessage');
        firstMessageSent = true;
    }
    socket.emit('chat message', payload);
    dispatch(addMessage(payload));
};

export const subscribeMessages = (payload) => (dispatch) => {
    socket.emit('newUser', payload);
    return socket.on('chat message', function(payload){
        dispatch(addMessage(payload));
    });
}