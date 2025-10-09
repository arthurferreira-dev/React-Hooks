import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import UseStateApp from './useState';
import UseEffectApp from './useEffect';
import UseRefApp from './useRef';

const rtr = createBrowserRouter([
  {
    path: "/useState",
    element: <UseStateApp />
  },
  {
    path: "/useEffect",
    element: <UseEffectApp />
  },
  {
    path: "/useRef",
    element: <UseRefApp/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rtr}/>
  </StrictMode>
);