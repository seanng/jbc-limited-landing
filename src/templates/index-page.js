import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  about,
  network,
  products,
}) => (
  <div>
    {/* TODO: replace this hero div. */}
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section id="about" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h1 className="title has-text-centered">{about.title}</h1>
              <div className="content">
                <p className="has-text-justified">{about.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="network" className="section has-background-grey-lighter">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <h1 className="title has-text-centered">{network.title}</h1>
              <p className="has-text-centered">{network.description}</p>
            </div>
          </div>
          {/* TODO: our network map go here. map = column 10 & legend = column 2? */}
        </div>
      </div>
    </section>
    <section id="products" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h1 className="title has-text-centered">{products.title}</h1>
              <p className="has-text-justified">{products.description}</p>
            </div>
          </div>
          <div className="column is-12">
            {/* TODO: products go here. */}
          </div>
        </div>
        {/* <Features gridItems={intro.blurbs} /> */}
        <div className="columns">
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/products">
              See all products
            </Link>
          </div>
        </div>
      </div>
    </section>
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
