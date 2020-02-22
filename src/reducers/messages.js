import {
    ADD_MESSAGE_SUCCESS
} from "../actions/";
const messages = (state = {}, action) => {
    switch(action.type){
        case ADD_MESSAGE_SUCCESS:
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
