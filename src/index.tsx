import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
// import * as serviceWorker from './serviceWorker';
import store from './store';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from "./layouts/MainLayout";

import TopPageContainer from "./containers/TopPageContainer";
import AboutPageContainer from "./containers/AboutPageContainer";
import SubPageContainer from "./containers/SubPageContainer";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainLayout>
        <Route exact path="/" component={TopPageContainer}></Route>
        <Route exact path="/about" component={AboutPageContainer}></Route>
        <Route exact path="/sub" component={SubPageContainer}></Route>
      </MainLayout>
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
