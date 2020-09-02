import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';
import './CollectionOverview.scss';
import PreviewColletion from '../CollectionPreview/CollectionPreview';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...collectionProps }) => (
        <PreviewColletion key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
