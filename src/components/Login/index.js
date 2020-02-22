import { connect } from 'react-redux';
import Login from './container';
import { createUser } from '../../actions';


const mapStateToProps = (state) => ({
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(
    mapStateToProps, { 
        createUser
    }
  )(Login);