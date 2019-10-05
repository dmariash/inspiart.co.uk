import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


class AboutPageTemplate extends React.Component {
  render() {
    const { title, content, contentComponent } = this.props;
    const PageContent = contentComponent || Content
    return (
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export { AboutPageTemplate }

class AboutPage extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data;
    return (
      <Layout>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
