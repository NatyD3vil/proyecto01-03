import { useState } from 'react'
import axios from 'axios'
import './App.css'

// Crear función para ingresar datos de login
function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [message, setMessage] = useState(''); 
  
// Crear función con la ruta a la base de datos
  function handleSubmit (event) {
    event.preventDefault();
    axios.post('http://localhost:3000/login', {usuario, clave})
    .then(res => {
      if (res.data.success) {
        console.log(res);
        setMessage('Usuario registrado');
        
      } else {
        setMessage('Usuario o contraseña incorrectos');
      }
    })
    .catch(err => {
      console.log(err);
      setMessage('Ocurrió un error, por favor intenta de nuevo');
  })
  };
    
// Formulario para ingresar datos de Login
return (
  <form onSubmit={handleSubmit}>
    <div>
      <h3>Alfa Inversiones</h3>
      <label htmlFor="usuario">Usuario</label>
      <input type="usuario" placeholder='ingresar usuario' className='form-control'
        onChange={e => setUsuario(e.target.value)} />
    </div>
    <div>
      <label htmlFor="password">Clave</label>
      <input type="password" placeholder='ingresar clave' className='form-control'
        onChange={e => setClave(e.target.value)} />
    </div>
    <button type="submit">Ingresar</button>
    {message && <p>{message}</p>} 
  </form>
);
};

export default Login;
