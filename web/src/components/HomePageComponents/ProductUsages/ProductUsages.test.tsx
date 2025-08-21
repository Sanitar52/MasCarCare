import { render } from '@redwoodjs/testing/web'

import ProductUsages from './ProductUsages'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductUsages', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductUsages />)
    }).not.toThrow()
  })
})
