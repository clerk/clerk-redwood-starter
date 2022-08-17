import { SignUp } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

import './SignUpPage.css'

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="Sign up" description="Sign up page" />
      <div className="container">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </div>
    </>
  )
}

export default SignUpPage
