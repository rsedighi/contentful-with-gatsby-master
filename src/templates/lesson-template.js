import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`

const LessonTemplate = ({ data: { blog } }) => (
  <div>
    <h1>{blog.title}</h1>
    <p>
      Guest: {blog.author.name} · <a href={blog.author.twitter}>Twitter</a>
    </p>
    <div>
    </div>
  </div>
)

export default LessonTemplate
