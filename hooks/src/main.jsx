import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseStateApp from "./useState";
import UseEffectApp from "./useEffect";
import UseRefApp from "./useRef";
import UseReducerApp from "./useReducer";
import UseContextApp from "./useContext";
import App from "./pages/App";
import "./App.css";
import UseMemoApp from "./useMemo";
import UseLayoutEffectApp from "./useLayoutEffect";
import UseCallBack from "./useCallBack";

const rtr = createBrowserRouter([
  {
    path: "/useState",
    element: <UseStateApp />,
  },
  {
    path: "/useEffect",
    element: <UseEffectApp />,
  },
  {
    path: "/useRef",
    element: <UseRefApp />,
  },
  {
    path: "/useReducer",
    element: <UseReducerApp />,
  },
  {
    path: "/useContext",
    element: <UseContextApp />,
  },
  {
    path: "/useMemo",
    element: <UseMemoApp />,
  },
  {
    path: "/useCallback",
    element: <UseCallBack />,
  },
  {
    path: "/useLayoutEffect",
    element: <UseLayoutEffectApp />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rtr} />
  </StrictMode>
);
