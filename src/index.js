import React from 'react';
import './styles.module.css';
import root from 'react-dom';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { Layout } from "./Layout";

export function FirstFigmaProject() {
  return (
    <Router> {/* eslint-disable-line */}
      <Layout>
        {/*<Routes>*/}
        {/*  <Route path='/' element={<Home />} > </Route> /!* eslint-disable-line *!/*/}
        {/*  <Route path={ticTacToePath} element={<TicTacToeGame />} layout={Layout}> </Route>*/}
        {/*  <Route*/}
        {/*    path={postsAndUsersPath}*/}
        {/*    element={<CommentsDashboard />}*/}
        {/*    layout={Layout}*/}
        {/*  />*/}
        {/*  <Route path={toDoListPath} element={<ToDoListApp />} layout={Layout}> </Route>*/}
        {/*</Routes>*/}
      </Layout>
    </Router>
  );
}

root.render(<FirstFigmaProject />, document.getElementById('root'));