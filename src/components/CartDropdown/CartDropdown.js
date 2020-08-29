import React from 'react';
import Button from '../Button/Button';

import './CartDropdown.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
