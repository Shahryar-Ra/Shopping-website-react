import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assests/ShopBag.svg';
import './CartIcon.scss';

import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { toggleHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
