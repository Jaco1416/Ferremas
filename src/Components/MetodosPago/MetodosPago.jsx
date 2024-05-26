import React from 'react';
import { Link } from 'react-router-dom';
import './MetodosPago.css';
import { PayPalButtons } from '@paypal/react-paypal-js';

const Metodospago = () => {
  return (
    <div className='metodospago'>
      <h1>Elige tu método de pago</h1>
      <div className='paypal-buttons-container'>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: "0.01" // Cantidad de prueba
                }
              }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(details => {
              alert("Transacción completada por " + details.payer.name.given_name);
            });
          }}
        />
      </div>
      <Link to='/transferencia'><button>Transferencia</button></Link>
    </div>
  );
}

export default Metodospago;
