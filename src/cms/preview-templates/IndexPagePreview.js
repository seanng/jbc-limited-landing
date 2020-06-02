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
      network={{
        ...data.network,
        image: getAsset(data.network.image)
      }}
      products={{
        ...data.products,
        categories: data.products.categories.map(cat => ({
          label: cat.label,
          thumbnail: getAsset(cat.thumbnail),
          description: cat.description,
          images: cat.images.map(img => ({
            name: img.name,
            source: getAsset(img.source)
          }))
        }))
      }}
    />
  );
};

export default IndexPagePreview;
