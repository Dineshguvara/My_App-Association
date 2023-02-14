import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>    
    <BrowserRouter>
       
        <App/>
       
    </BrowserRouter>
  </React.StrictMode>
);


