// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";



function App() {

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>
    }
  ]);
 
  return (
    
    <RouterProvider router={router} />
  );
}

export default App;
