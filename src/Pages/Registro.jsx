import React, { useState } from 'react';
import './CSS/Registro.css';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [formData, setFormData] = useState({
    rut: '',
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    direccion: '',
    celular: '',
    correo: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({
    rut: '',
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    direccion: '',
    celular: '',
    correo: '',
    password: '',
    confirmPassword: '',
    termsAccepted: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    setFormData({
      ...formData,
      [name]: newValue
    });
  
    // Validar campos en tiempo real
    if (name === 'nombre') {
      setErrors({ ...errors, nombre: newValue.trim() ? '' : 'El nombre es obligatorio' });
    } else if (name === 'correo') {
      // Puedes agregar validaciones de correo electrónico aquí si lo deseas
      setErrors({ ...errors, correo: newValue.trim() ? '' : 'El correo es obligatorio' });
    } else if (name === 'password') {
      if (newValue.trim().length < 8 || newValue.trim().length > 16) {
        setErrors({ ...errors, password: 'La contraseña debe tener entre 8 y 16 caracteres' });
      } else if (!/\d/.test(newValue.trim())) {
        setErrors({ ...errors, password: 'La contraseña debe contener al menos un número' });
      } else {
        setErrors({ ...errors, password: '' });
      }
    } else if (name === 'confirmPassword') {
      if (newValue.trim() !== formData.password.trim()) {
        setErrors({ ...errors, confirmPassword: 'Las contraseñas no coinciden' });
      } else {
        setErrors({ ...errors, confirmPassword: '' });
      }
    }
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar el formulario antes de enviar
    const formValid = validateForm();
    if (formValid) {
      // Si el formulario es válido, guardar los datos en localStorage
      localStorage.setItem('user', JSON.stringify(formData));
      console.log('Usuario guardado en localStorage:', formData);
      // Redirigir o mostrar un mensaje de éxito si es necesario
    } else {
      // Si el formulario no es válido, muestra un mensaje de error o haz lo que consideres necesario
      console.log('El formulario no es válido');
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
  
    // Validar campos requeridos
    for (const key in formData) {
      const value = formData[key];
      const trimmedValue = typeof value === 'string' ? value.trim() : value; // Elimina espacios al inicio y al final
  
      if (typeof value === 'string' && trimmedValue === '') {
        newErrors[key] = 'Este campo es obligatorio';
        isValid = false;
      }
    }
  
    // Validar términos aceptados
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Debes aceptar los términos y condiciones';
      isValid = false;
    }
  
    setErrors(newErrors);
    return isValid;
  };
  
  

  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>¡Regístrate!</h1>
        <p className='pObligatorio'>Todos los campos son obligatorios*</p>
        <form className="loginsingup-fields" onSubmit={handleSubmit}>
        <label htmlFor="rut" className='reg-label'>Rut sin puntos y con guión*</label>
          <input
            type="text"
            className="input"
            name="rut"
            value={formData.rut}
            onChange={handleChange}
            placeholder="Formato (15432123-1)"
            minLength="9"
            maxLength='10'
            required
          />
          {errors.rut && <p className="error-message">{errors.rut}</p>}
          <label htmlFor="nombre" className='reg-label'>Nombre*</label>
          <input
            type="text"
            className="input"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre*"
            minLength="3"
            maxLength="45"
            required
          />
          {errors.nombre && <p className="error-message">{errors.nombre}</p>}
          <label htmlFor="apellido_p" className='reg-label'>Apellido paterno*</label>
          <input
            type="text"
            className="input"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Ingresa tu apellido paterno*"
            minLength="10"
            maxLength="45"
            required
          />
          {errors.apellidos && <p className="error-message">{errors.apellidos}</p>}
          <label htmlFor="apellido_m" className='reg-label'>Apellido materno*</label>
          <input
            type="text"
            className="input"
            name="apellido_materno"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Ingresa tu apellido materno*"
            minLength="10"
            maxLength="45"
            required
          />
          {errors.apellidos && <p className="error-message">{errors.apellidos}</p>}
          <label htmlFor="direccion" className='reg-label'>Dirección*</label>
          <input
            type="text"
            className="input"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Ejemplo (los alerces #69420)"
            minLength="10"
            maxLength='60'
            required
          />
          {errors.direccion && <p className="error-message">{errors.direccion}</p>}
          <label htmlFor="celular" className='reg-label'>Número celular*</label>
          <input
            type="number"
            className="input"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            placeholder="Ingresa tu número celular (9xxxxxxxx)"
            minLength="9"
            maxLength="9"
            required
          />
          {errors.celular && <p className="error-message">{errors.celular}</p>}
          <label htmlFor="correo" className='reg-label'>Correo*</label>
          <input
            type="email"
            className="input"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ingresa tu correo*"
            minLength="10"
            maxLength="45"
            required
          />
          {errors.correo && <p className="error-message">{errors.correo}</p>}
          <label htmlFor="password" className='reg-label'>Contraseña*</label>
          <input
            type="password"
            className="input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña*"
            minLength="8"
            maxLength="16"
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
          <label htmlFor="confirmPassword" className='reg-label'>Repite contraseña*</label>
          <input
            type="password"
            className="input"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repite la contraseña*"
            minLength="8"
            maxLength="16"
            required
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              className=''
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
          </div>
          {errors.termsAccepted && <p className="error-message">{errors.termsAccepted}</p>}
          <div className="btn-container">
            <button className='boton-inferior' type="submit">
              <span>Registrar</span>
            </button>
          </div>
        </form>
        <p className="loginsignup-login">¿Ya tienes una cuenta? <Link to="/loginpage"><span>Inicia sesión acá</span></Link></p>
      </div>
    </div>
  );
};

export default Registro;
