import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Indicadores = () => {
  const [indicadores, setIndicadores] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mindicador.cl/api');
        setIndicadores(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Valor actualizado de monedas</h1>
      <ul>  
        <li>Dólar Observado: {indicadores.dolar?.valor}</li>
        <li>Euro: {indicadores.euro?.valor}</li>
      </ul>
    </div>
  );
};

export default Indicadores;
