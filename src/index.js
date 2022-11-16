import React from 'react'
import root from 'react-dom'
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { Layout } from './Layout'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './shared/styles/theme'
import { VenuesListWithFilter } from './views/VenuesListWithFilter'
import { Footer } from './Layout/Footer'
import { linkPaths } from './LinksPaths'
import { About } from "./views/HeaderViews/About";
import { Favourites } from "./views/HeaderViews/Favourites";
import { StartHosting } from "./views/HeaderViews/StartHosting";
import { Login } from "./views/HeaderViews/Login";
import { Contact } from "./views/FooterViews/Contact";
import { Assistance } from "./views/FooterViews/Assistance";
import { AboutUs } from "./views/FooterViews/AboutUs";
import { VenueDetails } from "./views/VenueDetails";

export function FirstFigmaProject () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path={linkPaths.home} element={<VenuesListWithFilter />} > </Route>
            <Route path={linkPaths.about} element={<About />}> </Route>
            <Route path={linkPaths.favourites} element={<Favourites />}> </Route>
            <Route path={linkPaths.hosting} element={<StartHosting />}> </Route>
            <Route path={linkPaths.login} element={<Login />}> </Route>
            <Route path={linkPaths.contact} element={<Contact />}> </Route>
            <Route path={linkPaths.assistance} element={<Assistance />}> </Route>
            <Route path={linkPaths.aboutUs} element={<AboutUs />}> </Route>
            <Route path={`${linkPaths.venue}/:venueId`} element={<VenueDetails />}> </Route>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

root.render(<FirstFigmaProject />, document.getElementById('root'))
