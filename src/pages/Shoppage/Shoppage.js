import React, { useReducer } from 'react';
import './Shoppage.scss';
import Data from './Shop.data';
import PreviewColletion from '../../components/CollectionPreview/CollectionPreview';

const shopReducer = (state, action) => {
  return state;
};

const Shoppage = () => {
  const [collections] = useReducer(shopReducer, Data);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...collectionProps }) => (
        <PreviewColletion key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default Shoppage;
