import {
    ADD_MESSAGE
} from "../actions/";
const messages = (state = {}, action) => {
    console.log('anything?', action.type, action.payload);
    switch(action.type){
        case ADD_MESSAGE:
            return Object.assign(
                {},
                state,
                action.payload
            );
        default:
            return state;
    }
}
export default messages;

//Selector
