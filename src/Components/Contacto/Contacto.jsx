import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Esto hace que la página cargue desde arriba cada vez que se monta el componente
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validar el campo específico en tiempo real
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    if (value.trim() === '') {
      error = `El campo no puede estar vacío o solo contener espacios.`;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (formData.user_name.trim() === '') {
      errors.user_name = 'El nombre no puede estar vacío o solo contener espacios.';
    }
    if (formData.user_email.trim() === '') {
      errors.user_email = 'El correo electrónico no puede estar vacío o solo contener espacios.';
    }
    if (formData.user_phone.trim() === '') {
      errors.user_phone = 'El teléfono no puede estar vacío o solo contener espacios.';
    }
    if (formData.message.trim() === '') {
      errors.message = 'El mensaje no puede estar vacío o solo contener espacios.';
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    emailjs
      .sendForm('service_omgbcu9', 'template_xe00wf8', form.current, {
        publicKey: 'KWbiImYFefuKZ0a-t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Mensaje enviado con éxito.', {
            position: 'top-center',
            autoClose: 1500, // Cierra automáticamente después de 1,5 segundos
            onClose: () => {
              navigate('/'); // Redirige a otra página después de cerrar la alerta
            },
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form-container">
      <h1>Contáctanos</h1>
      <hr />
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Nombre*</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Ingresa tu nombre"
            className="input-bonito"
            value={formData.user_name}
            onChange={handleInputChange}
            minLength='3'
            maxLength='15'
            required
          />
          {formErrors.user_name && <p style={{marginTop: '25px'}} className="error-message">{formErrors.user_name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico*</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Ingresa tu correo electrónico"
            className="input-bonito"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
          {formErrors.user_email && <p style={{marginTop: '25px'}} className="error-message">{formErrors.user_email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono*</label>
          <input
            type="number"
            id="phone"
            name="user_phone"
            placeholder="Ingresa tu número de teléfono (formato 9xxxxxxxx)"
            className="input-bonito"
            value={formData.user_phone}
            onChange={handleInputChange}
            minLength='9'
            maxLength='9'
            required
          />
          {formErrors.user_phone && <p style={{marginTop: '25px'}} className="error-message">{formErrors.user_phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Ingresa tu mensaje/duda"
            className="input-bonito"
            value={formData.message}
            onChange={handleInputChange}
            minLength='20'
            maxLength='500'
            required
          />
          {formErrors.message && <p style={{marginTop: '25px'}} className="error-message">{formErrors.message}</p>}
        </div>
        <div className="mensaje-inferior">
          <p>Todos los campos son obligatorios*</p>
        </div>
        <button type="submit" value="Send" className="boton-inferior">
          <span>Enviar mensaje</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
