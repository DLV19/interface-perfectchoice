import React, { useState } from 'react';
const LoginForm = () => {
  //almacenar el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Estado para almacenar el mensaje de error
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación, como enviar una solicitud al servidor
    if (!username || !password) {
      setError('Por favor, introduce un nombre de usuario y una contraseña.');
    } else {
      // Aquí podrías realizar la lógica de autenticación con el servidor
      // Por ejemplo, enviar una solicitud POST con username y password a una API
      // Si la autenticación es exitosa, puedes redirigir al usuario a otra página
      console.log('Nombre de usuario:', username);
      console.log('Contraseña:', password);
      // Limpia el mensaje de error si había uno
      setError('');
    }
  };

  return (
    <div>
      <h2>PERFECT CHOICE</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;