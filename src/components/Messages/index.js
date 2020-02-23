import { connect } from 'react-redux';
import { createMessage, subscribeMessages } from '../../actions';
import { getMessages, getUser} from "../../reducers";
import Messages from './container';

const mapStateToProps = (state) => ({
    messages: getMessages(state),
    user: getUser(state)
})

export default connect(
    mapStateToProps,
    { 
        newMessage: createMessage,
        subscribeMessages
    }
  )(Messages);