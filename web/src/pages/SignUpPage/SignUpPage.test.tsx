import { render } from '@redwoodjs/testing/web'

import SignUpPage from './SignUpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignUpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignUpPage />)
    }).not.toThrow()
  })
})
