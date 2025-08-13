import { render } from '@redwoodjs/testing/web'

import Reveal from './Reveal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Reveal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Reveal />)
    }).not.toThrow()
  })
})
