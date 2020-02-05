import React from 'react';
import { useForm } from 'react-hook-form';


function Messages(props) {
  
  let { messages, newMessage }  = props;
  const { register, handleSubmit } = useForm(); // initialise the hook
  
  const onSubmit = data => {
    newMessage(data.message);
  };

  return (
    <div>
      {messages.map((msg)=>{
        return <p key={msg}>{msg}</p>
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="message" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Messages;