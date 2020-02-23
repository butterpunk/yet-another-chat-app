import { connect } from 'react-redux';
import { getUser } from "../../reducers";
import TopMenu from './container';

const mapStateToProps = (state) => ({
    user: getUser(state),
})

export default connect(
    mapStateToProps,
  )(TopMenu);