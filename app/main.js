import React from 'react';
import Router from 'react-router';
import SLAboutView from './components/SLMainContent/SLAboutView.js';
import SLWorkView from './components/SLMainContent/SLWorkView.js';
import SLContactView from './components/SLMainContent/SLContactView.js';
import SLHomeView from './components/SLMainContent/SLHomeView.js';
import App from './App.js';

import { Route, DefaultRoute } from 'react-router';

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={SLAboutView}/>
    <Route name="work" handler={SLWorkView}/>
    <Route name="contact" handler={SLContactView}/>
    <Route name="home" handler={SLHomeView}/>
    <DefaultRoute handler={SLHomeView}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});



// React.render(<App />, document.getElementById('app'));
