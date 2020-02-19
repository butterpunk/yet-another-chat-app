import { connect } from 'react-redux';
import { addMessage, subscribeMessages } from '../../actions';
import { getMessages, getUsername } from "../../reducers";
import Messages from './container';

const mapStateToProps = (state) => ({
    messages: getMessages(state),
    username: getUsername(state)
})

export default connect(
    mapStateToProps,
    { 
        newMessage: addMessage,
        subscribeMessages
    }
  )(Messages);