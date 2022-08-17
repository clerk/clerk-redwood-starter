import { render } from '@redwoodjs/testing/web'

import SignInPage from './SignInPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignInPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignInPage />)
    }).not.toThrow()
  })
})
