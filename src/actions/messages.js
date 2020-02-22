import uuidv1 from 'uuid/v1';
import io from 'socket.io-client';
const socket = io('http://localhost:3005');

export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE'

export const addMessage = (payload) => {
    const ID = uuidv1()
    const {body, username} = payload; 
    return{
        type: ADD_MESSAGE_SUCCESS,
        payload :  {
            [ID] : { body, username}
        }
    }
};

export const createMessage = (payload) => dispatch => {
    console.log('getting here right?');
    socket.emit('chat message', payload);
    dispatch(addMessage(payload));
};

export const subscribeMessages = () => (dispatch) => {
    console.log('calling on subscribe messages');
    return socket.on('chat message', function(payload){
        console.log('getting this message', payload);
        dispatch(addMessage(payload));
    });
}