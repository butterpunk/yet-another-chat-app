import { connect } from 'react-redux';
import { addMessage } from './redux/actions';
import { getMessages } from './redux/reducer';
import Messages from './container';

const mapStateToProps = (state) => ({
    messages: getMessages(state)
})

export default connect(
    mapStateToProps,
    { newMessage: addMessage }
  )(Messages);