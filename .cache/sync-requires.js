const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("F:\\2022\\work\\Gatsby\\3dpit.github.io\\src\\templates\\blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("F:\\2022\\work\\Gatsby\\3dpit.github.io\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("F:\\2022\\work\\Gatsby\\3dpit.github.io\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("F:\\2022\\work\\Gatsby\\3dpit.github.io\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("F:\\2022\\work\\Gatsby\\3dpit.github.io\\src\\pages\\index.js")))
}

