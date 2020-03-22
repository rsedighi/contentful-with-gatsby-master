import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
        twitter
      }
      body {
        body
      }
    }
  }
`

const LessonTemplate = ({ data: { blog } }) => (
  <div>
    <h1>{blog.title}</h1> by {blog.author.name}
    <div>
    {blog.body.body}
    </div>
  </div>
)

export default LessonTemplate
