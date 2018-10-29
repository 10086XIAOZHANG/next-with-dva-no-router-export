const fetch = require('isomorphic-unfetch')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}
module.exports = withLess(withCSS({
  exportPathMap: function (defaultPathMap) {
    return {
      "/": {
        page: "/"
      },
      '/pages': {
        page: '/pages'
      }
    }
  }
}))