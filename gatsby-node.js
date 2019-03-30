// Gatsby API onCreatePage called after every page creation
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*'

    createPage(page)
  }
}
