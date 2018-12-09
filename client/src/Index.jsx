import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Home from './components/Home';
import NotFound from './components/common/NotFound';
import store from './store';
import './styles/index.scss';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));