import React from 'react';
import './Shoppage.scss';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

// ---------------- ShopPage

const Shoppage = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
    </div>
  );
};

export default Shoppage;
