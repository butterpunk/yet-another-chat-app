import { connect } from 'react-redux';
import { getMessages, getUsername, getAvatar } from "../../reducers";
import TopMenu from './container';

const mapStateToProps = (state) => ({
    username: getUsername(state),
    avatar: getAvatar(state),
})

export default connect(
    mapStateToProps,
  )(TopMenu);