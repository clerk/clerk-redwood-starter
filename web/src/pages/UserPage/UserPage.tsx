import { UserProfile } from '@clerk/clerk-react'
import { MetaTags } from '@redwoodjs/web'

const UserPage = () => {
  return (
    <>
      <MetaTags title="User profile" description="User profile page" />
      <UserProfile />
    </>
  )
}

export default UserPage
