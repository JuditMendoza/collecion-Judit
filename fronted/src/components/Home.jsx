import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginActions } from '../store/storelogin'; // Importa la acción de logout

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);
  const isLoggedin = userData.isAutenticated;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin) {
      navigate('/');
    }
  }, [isLoggedin, navigate]);

 
  return (
    <>
      <h1>Judit Mendoza Santana</h1>


      <h2>
        Nombre de usuario: {userData.userName}, Rol: {userData.userRol}
      </h2>

      
      <button
        onClick={() => {
          dispatch(loginActions.logout());
          navigate('/');
        }}
      >
        Salir
      </button>
    </>
  );
}

export default Home;

//Judit Mendoza Santana
