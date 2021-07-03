import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
      <div className="container">
        <Provider store={store}>
        <App/>
          </Provider>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
