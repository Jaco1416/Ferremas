import React, { useState } from 'react';
import './ConfirmarDatos.css';
import { Link } from 'react-router-dom';

const ConfirmarDatos = () => {
    const [inputsHabilitados, setInputsHabilitados] = useState(false);
    const [botonTexto, setBotonTexto] = useState('Editar Datos');

    // Estados para los valores de los campos de entrada
    const [nombre, setNombre] = useState('Alvarinho');
    const [apellidos, setApellidos] = useState('Do santos Cruzeirao Jr. III');
    const [direccion, setDireccion] = useState('Los Pehuenches 1547');
    const [telefono, setTelefono] = useState('954993343');
    const [correo, setCorreo] = useState('alvarinho69420@gmail.com');

    // Estados para los mensajes de error
    const [errores, setErrores] = useState({
        nombre: '',
        apellidos: '',
        direccion: '',
        telefono: '',
        correo: ''
    });

    // Funciones de validación
    const validarNombre = () => {
        if (nombre.trim() === '') {
            setErrores(prevErrores => ({
                ...prevErrores,
                nombre: 'El nombre es obligatorio'
            }));
        } else {
            setErrores(prevErrores => ({
                ...prevErrores,
                nombre: ''
            }));
        }
    };

    const validarApellidos = () => {
        if (apellidos.trim() === '') {
            setErrores(prevErrores => ({
                ...prevErrores,
                apellidos: 'Los apellidos son obligatorios'
            }));
        } else {
            setErrores(prevErrores => ({
                ...prevErrores,
                apellidos: ''
            }));
        }
    };

    const validarDireccion = () => {
        if (direccion.trim() === '') {
            setErrores(prevErrores => ({
                ...prevErrores,
                direccion: 'La dirección es obligatoria'
            }));
        } else {
            setErrores(prevErrores => ({
                ...prevErrores,
                direccion: ''
            }));
        }
    };

    const validarTelefono = () => {
        const telefonoRegex = /^\d{9}$/; // Por ejemplo, un teléfono de 9 dígitos
        if (!telefonoRegex.test(telefono)) {
            setErrores(prevErrores => ({
                ...prevErrores,
                telefono: 'El teléfono es inválido'
            }));
        } else {
            setErrores(prevErrores => ({
                ...prevErrores,
                telefono: ''
            }));
        }
    };

    const validarCorreo = () => {
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex básico para validar correos electrónicos
        if (!correoRegex.test(correo)) {
            setErrores(prevErrores => ({
                ...prevErrores,
                correo: 'El correo electrónico es inválido'
            }));
        } else {
            setErrores(prevErrores => ({
                ...prevErrores,
                correo: ''
            }));
        }
    };

    const habilitarInputs = () => {
        setInputsHabilitados(true);
        // Limpiar los mensajes de error cuando se habilitan los inputs
        setErrores({
            nombre: '',
            apellidos: '',
            direccion: '',
            telefono: '',
            correo: ''
        });
    };

    const toggleEdicion = () => {
        if (inputsHabilitados) {
            // Aquí iría la lógica para guardar los datos
            setBotonTexto('Editar Datos');
        } else {
            // Aquí podrías validar los campos antes de permitir la edición
            validarNombre();
            validarApellidos();
            validarDireccion();
            validarTelefono();
            validarCorreo();

            setBotonTexto('Confirmar Datos a Guardar');
        }
        setInputsHabilitados(!inputsHabilitados);
    };

    return (
        <div className='confirmardatos'>
            <div className="confirmardatos-format">
                <h1>Confirmar Datos</h1>
                <p>Si tus datos están correctos puedes continuar, si no, cámbialos según corresponda :</p>
                <div className="confirmardatos-format-main">
                    <div className="confirmardatos-format-main-item">
                        <h3>Nombre</h3>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} disabled={!inputsHabilitados} />
                        {errores.nombre && <span className="error">{errores.nombre}</span>}
                    </div>
                    <div className="confirmardatos-format-main-item">
                        <h3>Apellidos</h3>
                        <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} disabled={!inputsHabilitados} />
                        {errores.apellidos && <span className="error">{errores.apellidos}</span>}
                    </div>
                    <div className="confirmardatos-format-main-item">
                        <h3>Dirección</h3>
                        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} disabled={!inputsHabilitados} />
                        {errores.direccion && <span className="error">{errores.direccion}</span>}
                    </div>
                    <div className="confirmardatos-format-main-item">
                        <h3>Teléfono</h3>
                        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} disabled={!inputsHabilitados} />
                        {errores.telefono && <span className="error">{errores.telefono}</span>}
                    </div>
                    <div className="confirmardatos-format-main-item">
                        <h3>Correo</h3>
                        <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} disabled={!inputsHabilitados} />
                        {errores.correo && <span className="error">{errores.correo}</span>}
                    </div>
                </div>
                <Link to='/pagos'>
                    <button className='boton-inferiorss'>
                        <span className="text">Continuar</span>
                    </button>
                </Link>
                <button className='boton-inferiorss' onClick={() => { habilitarInputs(); toggleEdicion(); }}>
                    <span className="text">{botonTexto}</span>
                </button>
            </div>
        </div>
    );
};

export default ConfirmarDatos;
