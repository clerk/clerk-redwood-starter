import { UserButton } from '@clerk/clerk-react'

import { useAuth } from 'src/auth'
import { Link, routes } from '@redwoodjs/router'

import './StandardLayout.css'

type StandardLayoutProps = {
  children?: React.ReactNode
}

const StandardLayout = ({ children }: StandardLayoutProps) => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <header>
        <Link to={routes.home()}>Clerk + RedwoodJS</Link>
        <nav>
          <ul>
            <li>
              {isAuthenticated ? (
                <UserButton afterSignOutUrl={window.location.href} />
              ) : (
                <Link to={routes.signIn()}>Sign in</Link>
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
