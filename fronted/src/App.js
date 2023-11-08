//Judit Mendoza Santana
import React from 'react'
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
//Estructura de enrutamiento con 2 hijos ,
//un hijo va a ser el propio padre (index: true) 
const router = createBrowserRouter([
{
path: '/',
children: [
{
index: true,
element: <Login />
},
{
path: 'home',
element: < Home />
}
]
}
])
function App() {
return (
    
<RouterProvider router={router} />

);
}
export default App;
