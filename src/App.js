// import logo from './logo.svg';
import { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Dashboard from "./Components/Dashboard";
import LiqLock from "./Components/LiquidityLock";
import SushiLock from "./Components/SushiLock";
import Layout from "./Components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "liqlock",
          element: <LiqLock />,
        },
        {
          path: "sushi-v1/locker",
          element: <SushiLock />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
