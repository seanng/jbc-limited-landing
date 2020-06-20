import React from 'react'
import Img from 'gatsby-image'

const DEFAULT_IMAGE_STYLE = {
  width: '100%',
  height: '100%',
  borderRadius: '5px'
}

const PreviewCompatibleImage = ({ imageInfo, styles = {} }) => {
  const imageStyle = {
    ...DEFAULT_IMAGE_STYLE,
    ...styles
  }
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
