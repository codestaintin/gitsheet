import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));