module.exports = (nextConfig = {}) => (config, options) => {
  var rule, moduleRules, cssLoader
  const { cssOptions, cssModulesOptions } = options

  if (
    (rule = config.module.rules.find(rule =>
      Object.keys(rule).includes('oneOf')
    ))
  ) {
    moduleRules = rule.oneOf.filter(
      r =>
        ('test.module.scss'.match(r.test) || 'test.module.css'.match(r.test)) &&
        Array.isArray(r.use)
    )

    for (const moduleRule of moduleRules) {
      cssLoader = moduleRule.use.find(u => u.loader.match('css-loader'))

      cssLoader.options = {
        ...cssLoader.options,
        ...cssOptions,
        modules: {
          ...cssLoader.options.modules,
          ...cssModulesOptions
        }
      }
    }
  }

  if (typeof nextConfig.webpack === 'function') {
    return nextConfig.webpack(config, options)
  }

  return config
}
