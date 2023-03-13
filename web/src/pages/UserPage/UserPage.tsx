import { UserProfile } from '@clerk/clerk-react'

import { MetaTags } from '@redwoodjs/web'

import './UserPage.css'

const UserPage = () => {
  return (
    <>
      <MetaTags title="User profile" description="User profile page" />
      <div className="container">
        <UserProfile path="/user" />
      </div>
    </>
  )
}

export default UserPage
