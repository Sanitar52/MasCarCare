import { render } from '@redwoodjs/testing/web'

import ParallaxHero from './ParallaxHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ParallaxHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ParallaxHero />)
    }).not.toThrow()
  })
})
