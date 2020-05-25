import React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, width = '100%' }) => {
  const imageStyle = { width, borderRadius: '5px' }
  const { alt = '', childImageSharp, image, url } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  if (!!url && typeof url === 'string')
    return <img style={imageStyle} src={url} alt={alt} />;

  return null
}

export default PreviewCompatibleImage
