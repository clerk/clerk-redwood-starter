import { render } from '@redwoodjs/testing/web'

import StandardLayout from './StandardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StandardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StandardLayout />)
    }).not.toThrow()
  })
})
