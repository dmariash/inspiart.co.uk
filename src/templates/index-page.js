import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/Layout'
import Features from '../components/Features'


class IndexPageTemplate extends React.Component {
  render() {
    
    const { image, description, products } = this.props;
    return (
      <div>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          }}
        >
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-12">
                  <div className="content">
                    <div className="columns">
                      <div className="column is-12">
                        <ReactMarkdown source={description} />
                      </div>
                    </div>

                    <h3 className="has-text-weight-semibold">
                      Classes I offer
                    </h3>
                    <Features gridItems={products} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  products: PropTypes.array,
}

export { IndexPageTemplate };

class IndexPage extends React.Component {
  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    return (
      <Layout>
        <IndexPageTemplate
          image={frontmatter.image}
          description={frontmatter.description}
          products={frontmatter.products}
        />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        products {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          info
        }
      }
    }
  }
`
