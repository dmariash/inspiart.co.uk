import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Gallery from 'react-photo-gallery'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

class GalleryPageTemplate extends React.Component {
  render() {
    const { image, description, images } = this.props;
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

                    
                    <Gallery
                      photos={images.map(i => {return {src: i.src.publicURL, width: 1, height: 1}})}
                    />
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

GalleryPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  images: PropTypes.array
}

export { GalleryPageTemplate };

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <GalleryPageTemplate
        image={frontmatter.image}
        description={frontmatter.description}
        images={frontmatter.images}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GalleryPage

export const galleryPageQuery = graphql`
query GalleryPageTemplate {
  markdownRemark(frontmatter: {}) {
    frontmatter {
      image {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      images {
        src {
          publicURL
        }
      }
    }
  }
}

`
