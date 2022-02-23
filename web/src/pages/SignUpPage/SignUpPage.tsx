import { SignUp } from '@clerk/clerk-react'
import { MetaTags } from '@redwoodjs/web'

const SignUpPage = () => {
  return (
    <>
      <MetaTags title="Sign up" description="Sign up page" />
      <SignUp />
    </>
  )
}

export default SignUpPage
