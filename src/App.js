import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/layoutComponents/Footer";
import { router } from "./Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
