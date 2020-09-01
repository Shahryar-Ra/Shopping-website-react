import React from 'react';
import './Shoppage.scss';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';

const Shoppage = ({ collections }) => {
  return (
    <div className='shop-page'>
      <CollectionOverview />
    </div>
  );
};

export default Shoppage;
