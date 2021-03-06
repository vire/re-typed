import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import './styles/app.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#container')
);
