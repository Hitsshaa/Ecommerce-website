import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './context/ProductContext'
import { CounterProvider } from './context/CounterContext';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <AppProvider>
  <CounterProvider>
  <CartProvider>
  {/* <React.StrictMode>  */}
    <App />
  {/* </React.StrictMode>  */}
  </CartProvider>
  </CounterProvider>
   </AppProvider>
);

reportWebVitals();
