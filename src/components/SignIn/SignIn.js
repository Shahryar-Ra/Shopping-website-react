import React, { useReducer } from 'react';

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
        <input
          name='email'
          type='email'
          value={state.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>

        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
};

export default SignIn;
