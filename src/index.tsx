import './assets/scss/root.scss';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './helpers';
import Preloader from './modules/kit/Preloader';
import { PAGE } from './routes/client';

const Home = lazy(() => import('./components/home'));

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <Router history={history}>
      <Switch>
        <Route path={PAGE.HOME} component={Home} />
      </Switch>
    </Router>
  </Suspense>,
  document.getElementById('root')
);
