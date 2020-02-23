import React, { useEffect }  from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled, { css } from 'styled-components';
import Container from '@material-ui/core/Container';
import TopMenu from '../TopMenu';
import Link from '@material-ui/core/Link';

const ButtonDisplay = styled(Button)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3f51b5;
  color: #3f51b5;
  margin-top: 10px;
  padding: 0.25em 1em;
  &:hover{
    color: white;
    background-color: #3f51b5;
  }
  ${props => props.primary && css`
    background: #3f51b5;
    color: white;
  `}
`;

const CardDisplay = styled(Card)`
  margin-top: 15px;
  margin-bottom: 15px;
  white-space: pre-wrap;
`;

const UsernameDisplay = styled.p`
  font-size: 10px;
  color: grey;
`;

const TextFieldDisplay = styled(TextField)`
  width: 100%;
  margin-top: 15px;
`;


function Messages(props) {
  let { messages, newMessage, subscribeMessages, user }  = props;

  const { register, handleSubmit, reset } = useForm(); // initialise the hook
  
  const onSubmit = data => {
    reset();
    newMessage({body: data.message, user, meta: {}});
  };

  useEffect (() => {
    subscribeMessages({});
  },[]);

  const chatCard = (message) => {
    const { body, user, meta} = message;
    console.log(meta);
    if(meta.hasOwnProperty('firstMessage')){
      return(
        <>
          <UsernameDisplay>{user.avatar}{user.name}:</UsernameDisplay>
          <CardDisplay>
            <CardContent>
              Your first message has been sent to Blake.
              <br></br>
              <br></br>
              While you wait take a look at his personal website: 
              <br></br>
              <br></br>
              🧑‍💻 <Link>www.blakebutterworth.com</Link>
              <br></br>
              <br></br>
              or this github for this project:
              <br></br>
              <br></br>
              🤖 <Link>www.github.com</Link>
            </CardContent>
          </CardDisplay>
        </>
      );     
    }else{
      return(
        <>
          <UsernameDisplay>{user.avatar}{user.name}:</UsernameDisplay>
          <CardDisplay>
            <CardContent>
              {body}
            </CardContent>
          </CardDisplay>
        </>
      );
    }

  }
  
  return (
    <>
    <TopMenu/>
      <Container maxWidth="sm">
        {
        Object.keys(messages).map((id)=>{
          let msg = messages[id];
          return chatCard(msg);
        })
        }
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldDisplay  id="filled-textarea" label="Type Message" name="message" variant="filled" inputRef={register}/>
          <ButtonDisplay type="submit" variant="contained" color="primary">
            Send
          </ButtonDisplay>
        </form>
      </Container>
    </>
  );
}

export default Messages;