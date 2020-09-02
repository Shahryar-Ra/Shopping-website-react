import React from 'react';
import './CollectionPreview.scss';
import { Link, withRouter } from 'react-router-dom';

import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ match, title, items }) => {
  return (
    <div className='collection-preview'>
      <Link to={`${match.path}/${title.toLowerCase()}`} className='title'>
        {title.toUpperCase()}
      </Link>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
