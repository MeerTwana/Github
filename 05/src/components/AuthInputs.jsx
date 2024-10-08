import { useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button.jsx';
import Input from './Input.jsx';


  // display: flex;
  // flex-direction: column;
  // gap: 0.5rem;
  // margin-bottom: 1.5rem;


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-3' >
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          // style={{
          //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
          // }}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          invalid={passwordNotValid}
          label="Password"
          type="password"
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </div>
      <div className="actions">
        <button type="button" className="text-[#f0b322] border-none px-1 py-2 mx-5 hover:text-[#f0920e]">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
