import { connect } from 'react-redux';
import { addMessage } from '../actions';
import Messages from './container';

const mapStateToProps = (state) => ({
    messages: state
})

const mapDispatchToProps = (dispatch) => ({
    newMessage: (payload) => dispatch(addMessage(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Messages);