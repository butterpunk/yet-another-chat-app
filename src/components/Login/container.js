import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from "react-router-dom";
import styled, { css } from 'styled-components';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'

const GreyContainer = styled.div`
    background-color: #404041;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 25px;
    min-height: 250px;
`;
const Headline = styled.h1`
  font-size: 36px;
  margin-top: 5px;
  margin-bottom: 5px;
`
const WhiteHeadline = styled(Headline)`
  color: white;
`;

const GreyHeadline = styled(Headline)`
  color: #808284;
`;

const WhiteText = styled.p`
  color: white;
`;

const InputDisplay = styled.input`
background-color: black;
color: white;
padding-left: 5px;
padding-top: 10px;
padding-bottom: 10px;
border-width: 1px;
border-radius: .5px;
font-size: 18px;
&:focus{
  outline: none;
}
`;

const UsernameField = styled(InputDisplay)`
  min-width: 200px;
  padding-left: 15px;
`;

const EmojiField = styled(InputDisplay)`
  width: 30px;
  padding-left: 10px;
  padding-right: 10px;
  ::placeholder{
    text-align: center;
  }
  text-align: center;
`;

const Button = styled.button`
  background-color: #3F51B5;
  color: white;
  text-align: center;
  border-width: 0px;
  border-radius: .5px;
  padding-top: 10px;
  padding-bottom: 10px;
  &:focus{
    outline: none;
  }
  display: block;
  margin-top: 15px;
`

function Login(props) {
  const { createUser } = props;
  const { register, handleSubmit } = useForm(); // initialise the hook
  const [showEmojiPicker, setEmojiPicker] = useState(false);
  const [userEmoji, setEmoji] = useState('😍')

  const onSubmit = data => {
    createUser(data.username, userEmoji);
    props.history.push("/messages");
  };

  const renderedEmoji = <Emoji emoji={userEmoji} size={16} />
  return (
      <>
        <GreyContainer>
          <WhiteHeadline>👋 Welcome to</WhiteHeadline>
          <GreyHeadline>⚡️ Blake's Chat App</GreyHeadline>
          <WhiteText> Enter a username and choose an avatar to get started</WhiteText>
          <form onSubmit={handleSubmit(onSubmit)}>
          {renderedEmoji}
            <EmojiField onClick={()=>setEmojiPicker(true)} value={userEmoji} ></EmojiField>
            <UsernameField name="username" ref={register} placeholder="username"></UsernameField>
            <Button name="submit">Let's Go</Button>
          </form>
        </GreyContainer>
        {showEmojiPicker &&
            <Picker set='emojione' onSelect={(v)=> {setEmoji(v.native); setEmojiPicker(false);}} autoFocus={false}/>
        }
      </>
  );
}

export default Login;