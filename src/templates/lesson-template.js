import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt
      author {
        name
        twitter
      }
      body {
        childMarkdownRemark
        {
          html
        }
      }
    }
  }
`

const LessonTemplate = ({ data: { blog } }) => (
  <div>
    <h1>{blog.title}</h1> <h3>Author: {blog.author.name}</h3> 
    <div dangerouslySetInnerHTML={{__html: blog.body.childMarkdownRemark.html}}/>

  </div>
)

export default LessonTemplate
