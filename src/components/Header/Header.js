import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assests/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
