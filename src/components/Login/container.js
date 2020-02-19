import React, { useEffect }  from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../actions';
import { Redirect } from "react-router-dom";

function Login(props) {
  const { loginUser, loginError, isAuthenticated } = props;
  const { register, handleSubmit } = useForm(); // initialise the hook
  
  const onSubmit = data => {
    loginUser(data.email, data.password);
  };

  if(isAuthenticated) {
    return <Redirect to="/" />;
  }else{
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" ref={register} />
            <input name="password" ref={register} />
            <input type="submit" />
            {loginError && (
                <h3>Wrong email or password</h3>
            )}
          </form>
        </div>
      );
  }
}

export default Login;