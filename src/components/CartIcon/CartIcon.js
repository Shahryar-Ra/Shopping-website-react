import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assests/ShopBag.svg';
import './CartIcon.scss';

import { connect } from 'react-redux';

import { toggleHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
