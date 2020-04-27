import addCssOptions from '../webpack'

const mockConfig = () => ({
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.module\.scss$/,
            use: [
              {
                loader: 'css-loader',
                options: { foo: true, modules: { bar: true } }
              }
            ]
          },
          {
            test: /\.module\.css$/,
            use: [
              {
                loader: 'css-loader',
                options: { foo: true, modules: { bar: true } }
              }
            ]
          }
        ]
      }
    ]
  }
})

const nextConfig = {
  webpack: jest.fn(config => config)
}

describe('addCssOptions', () => {
  it('should return webpack', () => {
    const options = addCssOptions()
    const config = mockConfig()
    const webpackConfig = options(config, {})

    expect(webpackConfig).toEqual(config)
  })

  it('should override existing css-loader options', () => {
    const options = addCssOptions({
      cssOptions: { foo: false },
      cssModulesOptions: { bar: false }
    })
    const config = mockConfig()
    const webpackConfig = options(config, {})

    expect(webpackConfig.module.rules.length).toEqual(1)
    expect(webpackConfig.module.rules[0].oneOf[0].use[0].options).toEqual({
      foo: false,
      modules: {
        bar: false
      }
    })
  })

  it('should pass config to nested webpack function', () => {
    const loader = addCssOptions(nextConfig)

    loader({ module: { rules: [] } }, {})

    expect(nextConfig.webpack).toBeCalledWith({ module: { rules: [] } }, {})
  })
})
