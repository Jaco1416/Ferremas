import React, { useState, useEffect }  from 'react';
import './LoginP.css';

const PaginaLogin = () => {
  const [modalAbierto, setModalAbierto] = useState(false); // Estado para controlar si la ventana modal está abierta

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  useEffect(() => {
    // Esto hace que la página cargue desde arriba cada vez que se monta el componente
    window.scrollTo(0, 0);
  }, []); // El segundo parámetro [] asegura que este efecto se ejecute solo una vez, cuando el componente se monta

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className='label-login'>Correo electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Correo electrónico" required className='login-inputs-bonitos'/>
          </div>
          <div className="form-group">
            <label htmlFor="password" className='label-login'>Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Contraseña" required className='login-inputs-bonitos'/>
          </div>
          <button type="submit" className='boton-inferiors'><span>Iniciar sesión</span></button>
          <p className='olvidaste-p' onClick={abrirModal}>¿Olvidaste tu contraseña?</p> {/* Agregar onClick para abrir la ventana modal */}
        </form>
      </div>
      <div className={`modal ${modalAbierto ? 'mostrar' : ''}`}> {/* Agregar la clase 'mostrar' si modalAbierto es true */}
        <div className="modal-contenido">
          <button className="cerrar" onClick={cerrarModal}>×</button> {/* Botón de cerrar */}
          <h3>Recuperar contraseña</h3>
          <form>
            <div className="form-group">
              <p>Ingresa el correo registrado, te mandaremos un correo para que puedas restablecer tu contraseña.</p>
              <input type="email" id="correo" name="correo" placeholder="Correo electrónico" required className='login-inputs-bonitos'/>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaginaLogin;
