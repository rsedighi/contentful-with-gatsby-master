import React from "react"
import { graphql, Link } from "gatsby"
import '../style.css'
export const query = graphql`
  {
    blogs: allContentfulBlogPost {
      nodes {
        title
        slug
        author {
          name
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    <h1>Ram's Corner</h1>
    {data.blogs.nodes.map(blog => (
      <div key={`blog-${blog.slug}`}>
        <h2>
          <Link to={`/${blog.slug}`}>
            {blog.title} (with {blog.author.name})
          </Link>
        </h2>
      </div>
    ))}
  </div>
)
