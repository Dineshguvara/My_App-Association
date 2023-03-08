import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


