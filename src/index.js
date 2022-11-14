import React from 'react'
import root from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Layout } from './Layout'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './shared/styles/theme'
import { VenuesListWithFilter } from './views/VenuesListWithFilter'
import { Footer } from './Layout/Footer'

export function FirstFigmaProject () {
  return (
    <ThemeProvider theme={theme}>
      <Router> {/* eslint-disable-line */}
          <Layout>
            <VenuesListWithFilter />
            {/* <Routes> */}
            {/*  <Route path='/' element={<Home />} > </Route> /!* eslint-disable-line *!/ */}
            {/*  <Route path={ticTacToePath} element={<TicTacToeGame />} layout={Layout}> </Route> */}
            {/*  <Route */}
            {/*    path={postsAndUsersPath} */}
            {/*    element={<CommentsDashboard />} */}
            {/*    layout={Layout} */}
            {/*  /> */}
            {/*  <Route path={toDoListPath} element={<ToDoListApp />} layout={Layout}> </Route> */}
            {/* </Routes> */}
            <Footer />
          </Layout>
      </Router>
    </ThemeProvider>
  )
}

root.render(<FirstFigmaProject />, document.getElementById('root'))
