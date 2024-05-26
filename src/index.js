import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Components/Context/ShopContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const paypalOptions = {
  "client-id": "AfCyjkCLvyLLIV9iABAoGMp3M7Pa8PJRe11qzgA65lkCOpROC0njmrvqIUA1wK7EXVno-Trn5vWtHLEg",
  "currency" : "USD"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <PayPalScriptProvider options={paypalOptions}>
        <App />
      </PayPalScriptProvider>
    </ShopContextProvider>
  </React.StrictMode>
);

