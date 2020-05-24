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
      products={{
        ...data.products,
        categories: entry.getIn(['data', 'products', 'categories']).map(cat => ({
          label: cat.get('label'),
          images: cat.get('images').map(img => ({ source: getAsset(img.get('source'))}))
        }))
      }}
    />
  );
};

export default IndexPagePreview;
