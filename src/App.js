// import logo from './logo.svg';
import { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Toaster position="bottom-right" reverseOrder={false} />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
