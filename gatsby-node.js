exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading blog", JSON.stringify(result.errors))
  }

  result.data.allContentfulBlogPost.nodes.forEach(blog => {
    actions.createPage({
      path: `/${blog.slug}/`,
      component: require.resolve("./src/templates/lesson-template.js"),
      context: {
        slug: blog.slug,
      },
    })
  })
}

