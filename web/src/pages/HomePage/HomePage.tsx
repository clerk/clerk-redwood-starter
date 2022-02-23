import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

import './HomePage.css'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Clerk + RedwoodJS Starter" description="Home page" />
      <div className="home">
        <h1>Welcome to your new app</h1>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
        </p>
        <div className="cards">
          <SignedIn>
            <div className="card">
              <Link to={routes.user()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#335bf1"
                  strokeWidth={2}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <div className="card-content">
                  <h3>Explore features provided by Clerk</h3>
                  <p>
                    Interact with the user button, user profile, and more to
                    preview what your users will see
                  </p>
                </div>
                <svg
                  className="icon-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#335bf1"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="card">
              <Link to={routes.signUp()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#335bf1"
                  strokeWidth={2}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <div className="card-content">
                  <h3>Sign up for an account</h3>
                  <p>
                    Sign up and sign in to explore all the features provided by
                    Clerk out-of-the-box
                  </p>
                </div>
                <svg
                  className="icon-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#335bf1"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SignedOut>
          <div className="card">
            <a
              href="https://dashboard.clerk.dev?utm_source=clerk-redwood-starter"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="#335bf1"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <div className="card-content">
                <h3>Configure settings for your app</h3>
                <p>
                  Visit Clerk to manage instances and configure settings for
                  user management, theme, and more
                </p>
              </div>
              <svg
                className="icon-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="#335bf1"
                strokeWidth={2}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="links">
          <a
            href="https://docs.clerk.dev?utm_source=clerk-redwood-starter"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read Clerk documentation
          </a>
          <a
            href="https://redwoodjs.com/docs/introduction"
            target="_blank"
            rel="noreferrer noopener"
          >
            Read RedwoodJS documentation
          </a>
        </div>
        <footer className="footer">
          <p>
            Powered by{' '}
            <a
              href="https://clerk.dev?utm_source=clerk-redwood-starter"
              target="_blank"
              rel="noopener noreferrer"
              title="Clerk"
            >
              <img alt="Clerk logo" src="/images/clerk.svg" />
            </a>
            +
            <a
              href="https://redwoodjs.com"
              target="_blank"
              rel="noopener noreferrer"
              title="RedwoodJS"
            >
              <img alt="RedwoodJS logo" src="/images/redwoodjs.svg" />
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default HomePage
