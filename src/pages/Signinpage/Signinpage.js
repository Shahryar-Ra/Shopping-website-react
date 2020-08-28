import React from 'react';
import './Signinpage.scss';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const Signinpage = () => {
  return (
    <div>
      <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Signinpage;
