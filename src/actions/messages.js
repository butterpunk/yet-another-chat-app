import uuidv1 from 'uuid/v1';
import io from 'socket.io-client';
const socket = io('http://localhost:3005');

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (payload) => {
    const ID = uuidv1()
    const {body, username} = payload; 
    return{
        type: ADD_MESSAGE,
        payload :  {
            [ID] : { body, username}
        }
    }
};
export const subscribeMessages = () => (dispatch) => {
    return socket.on('chat message', function(msg){
        dispatch(addMessage(msg));
    });
}