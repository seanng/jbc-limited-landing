import React from 'react';
import { graphql } from 'gatsby';

import Cover from '../components/Cover';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import About from '../components/About';
import OurNetwork from '../components/OurNetwork';
import OurProducts from '../components/OurProducts';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  about,
  network,
  products,
}) => (
  <div>
    <Cover image={image} title={title} subheading={subheading} />
    <About title={about.title} description={about.description} />
    <OurNetwork title={network.title} description={network.description} image={network.image} />
    <OurProducts title={products.title} description={products.description} categories={products.categories} />
    <Contact />
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
        network={frontmatter.network}
        products={frontmatter.products}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        about {
          title
          description
        }
        network {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        products {
          title
          description
          categories {
            label
            images {
              source {
                childImageSharp {
                  fluid(maxWidth: 1024, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
