const addCssOptions = require('./webpack')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack: addCssOptions(nextConfig)
  })
}
