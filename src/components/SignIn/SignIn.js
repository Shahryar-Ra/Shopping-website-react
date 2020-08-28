import React, { useReducer } from 'react';
import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { signInWithGoogle } from '../../Firebase/firebase.utils';

const initialState = {
  email: '',
  password: '',
};

const SigninReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR':
      return {
        email: '',
        password: '',
      };

    case 'HANDLECHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return alert('ERROR');
  }
};

const SignIn = () => {
  const [state, dispatch] = useReducer(SigninReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch({ type: 'HANDLECHANGE', payload: { name, value } });
  };

  return (
    <div className='sign-in'>
      <h2>I Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={state.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <Button type='submit'>Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
