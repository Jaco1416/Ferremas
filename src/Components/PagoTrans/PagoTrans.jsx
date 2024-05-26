import React from 'react'
import './PagoTrans.css'

const pagoTransferencia = () => {
  return (
    <div className='pagotransferencia-container'>
        <div className="transferencia-titles">
            <h1>Pago por transferencia</h1>
            <hr />
            <p className='subtitle'>Transfiere a los siguientes datos, posteriormente sube la captura y recibiras la confirmación a mas tardar 2 días hábiles.</p>
            <h3>RUT</h3>
            <p className='p-datos'>23.445.888-9</p>
            <h3>NOMBRE</h3>
            <p className='p-datos'>Ferremas LTDA</p>
            <h3>CORREO</h3>
            <p className='p-datos'>ferremas@goat.cl</p>
            <h3>BANCO</h3>
            <p className='p-datos'>Banco de Chile</p>
            <h3>TIPO DE CUENTA</h3>
            <p className='p-datos'>Cuenta Corriente</p>
            <h3>NUMERO DE CUENTA</h3>
            <p className='p-datos'>123456789</p>
            <h3>Sube la captura:</h3>
            <input type="file"></input>
            <button type="submit" className='boton-inferior'><span>Subir Pago</span></button>
        </div>
    </div>
  )
}

export default pagoTransferencia