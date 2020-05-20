import React from 'react';
import { Link, graphql } from 'gatsby';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import ProductsTabsList from '../components/ProductsTabsList';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  about,
  network,
  products,
}) => (
  <div>
    <div
      className="cover margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className="container">
        <div className="cover-content">
          <h1 className="cover-slogan has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-white">
            {title}
          </h1>
          <h3 className="has-text-white is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
            {subheading}
          </h3>
          <a href="#contact">
            <button
              type="button"
              className="button is-medium has-text-white"
              style={{
                backgroundColor: '#A23958',
                border: 0,
                height: '55px',
                width: '255px',
                marginTop: '50px',
              }}
            >
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </div>
    <section
      id="about"
      className="section has-background-white section--gradient"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content-wrapper">
              <h1 className="title spaced-title has-text-grey-dark has-text-centered">
                {about.title}
              </h1>
              <p className="has-text-justified has-prewrap has-text-grey is-size-4-widescreen">
                {about.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="network" className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <h1 className="title spaced-title has-text-centered">
              {network.title}
            </h1>
            <p className="has-text-centered has-prewrap has-text-grey is-size-4-widescreen">
              {network.description}
            </p>
          </div>
        </div>
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginTop: '90px' }}
          >
            <PreviewCompatibleImage imageInfo={network.image} />
            {/* replace with image of map + the stats */}
          </div>
        </div>
      </div>
    </section>
    <section
      id="products"
      className="section has-background-white section--gradient"
    >
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content-wrapper">
              <h1 className="title spaced-title has-text-centered">
                {products.title}
              </h1>
              <p className="has-text-justified has-prewrap has-text-grey is-size-4-widescreen">
                {products.description}
              </p>
              <ProductsTabsList />
            </div>
          </div>
        </div>
      </div>
    </section>
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
          list {
            name
            images {
              text
              image {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
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
