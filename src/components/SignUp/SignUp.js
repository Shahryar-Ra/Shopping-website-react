import React, { useReducer } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';

import './Signup.scss';

// setting up state managment with reducer

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ON_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'CLEAR_STATE':
      return {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };

    default:
      return alert('default');
  }
};

// component logic

const SignUp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      alert('Passwords dont match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        state.email,
        state.password
      );

      createUserProfileDocument(user, state.displayName);

      dispatch({ Type: 'CLEAR_STATE' });
    } catch (error) {
      alert('error', error.message);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    dispatch({ Type: 'ON_CHANGE', payload: { value, name } });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={state.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={state.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={state.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={state.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <Button type='submit'>SIGN UP</Button>
      </form>
    </div>
  );
};

export default SignUp;
