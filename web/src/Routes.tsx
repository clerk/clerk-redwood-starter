// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import StandardLayout from './layouts/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={StandardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/sign-up" page={SignUpPage} name="signUp" />
        <Route path="/sign-in" page={SignInPage} name="signIn" />
        <Route path="/user" page={UserPage} name="user" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
