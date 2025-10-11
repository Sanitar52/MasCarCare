import { render } from '@redwoodjs/testing/web'

import ManualPage from './ManualPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ManualPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ManualPage />)
    }).not.toThrow()
  })
})
