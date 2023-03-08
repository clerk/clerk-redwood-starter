import { SignIn } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

import './SignInPage.css'

const SignInPage = () => {
  return (
    <>
      <MetaTags title="Sign in" description="Sign in page" />

      <div className="container">
        <SignIn path="/sign-in" signUpUrl="/sign-up" />
      </div>
    </>
  )
}

export default SignInPage
