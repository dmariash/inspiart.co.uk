import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Gallery from 'react-photo-gallery'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown'

class GalleryPageTemplate extends React.Component {
  render() {
    const { image, description, images } = this.props;
    const photos = [];
    for (const i of images) {
      var img = new Image()
      img.src = i.src.publicURL
      photos.push({
        src: img.src,
        width: Math.round(img.width / 1000),
        height: Math.round(img.height / 1000)
      })
    }
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
                <div className="column is-2">
                  <div className="content">
                    <div className="columns">
                      <div className="column is-12">
                        <ReactMarkdown source={description} />
                      </div>
                    </div>
                    <Gallery photos={photos} targetRowHeight={200}/>
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
  markdownRemark(frontmatter: {templateKey: { eq: "gallery-page" } }) {
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
      images {
        src {
          publicURL
        }
      }
    }
  }
}

`
