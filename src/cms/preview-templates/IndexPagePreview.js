import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <IndexPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      subheading={data.subheading}
      about={data.about}
      network={data.network}
      products={data.products || { list: [] } }
    />
  );
};

export default IndexPagePreview;
