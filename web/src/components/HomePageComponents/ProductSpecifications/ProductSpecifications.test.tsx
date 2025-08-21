import { render } from '@redwoodjs/testing/web'

import ProductSpecifications from './ProductSpecifications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductSpecifications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductSpecifications />)
    }).not.toThrow()
  })
})
