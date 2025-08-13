import { render } from '@redwoodjs/testing/web'

import FullScreenSection from './FullScreenSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FullScreenSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FullScreenSection />)
    }).not.toThrow()
  })
})
