import withCssOptions from '../index'

describe('withCssOptions', () => {
  it('should return webpack', () => {
    const nextConfig = withCssOptions()

    expect(typeof nextConfig.webpack).toEqual('function')
  })
})
