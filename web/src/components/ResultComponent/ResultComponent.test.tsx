import { render } from '@redwoodjs/testing/web'

import ResultComponent from './ResultComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResultComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResultComponent />)
    }).not.toThrow()
  })
})
