import { UserButton } from '@clerk/clerk-react'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import './StandardLayout.css'

type StandardLayoutProps = {
  children?: React.ReactNode
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const { isAuthenticated, logIn } = useAuth()

  return (
    <>
      <header>
        <Link to={routes.home()}>Clerk + RedwoodJS</Link>
        <nav>
          <ul>
            <li>
              {isAuthenticated ? (
                <UserButton afterSignOutAll={window.location.href} />
              ) : (
                <button onClick={logIn}>Sign in</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default StandardLayout
