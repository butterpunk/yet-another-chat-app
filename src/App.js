import React from 'react';
import { useForm } from 'react-hook-form';

import './App.css';

const mapStateToProps = (state) => ({
    messages: state
})

const mapDispatchToProps = (dispatch) => ({
    newMessage: dispatch(/**/)
});

const { connect } = ReactRedux;
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function App(props) {
  
  let { value, newMessage }  = props;
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  
  const onSubmit = data => {
    newMessage(data.message);
  };

  return (
    <div className="App">
      {value.map((msg)=>{
        return <p>{msg}</p>
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="message" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
