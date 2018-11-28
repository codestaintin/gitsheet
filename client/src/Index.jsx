import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SignUp from './components/auth/SignUp';
import Hello from './components/Hello';
import store from './store';
import './styles/index.scss';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/hello" component={Hello} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));