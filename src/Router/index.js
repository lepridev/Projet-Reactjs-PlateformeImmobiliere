import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Louer from "../components/pages/Louer";
import Vendre from "../components/pages/Vendre";
import Residence from "../components/pages/Residence";
import Terrain from "../components/pages/Terrain";
import Navbar from "../components/layoutComponents/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navbar>
        <Home />
      </Navbar>
    ),
  },
  {
    path: "/louer",
    element: (
      <Navbar>
        <Louer />
      </Navbar>
    ),
  },
  {
    path: "/vendre",
    element: (
      <Navbar>
        <Vendre />
      </Navbar>
    ),
  },
  {
    path: "/residence",
    element: (
      <Navbar>
        <Residence />
      </Navbar>
    ),
  },
  {
    path: "/terrain",
    element: (
      <Navbar>
        <Terrain />
      </Navbar>
    ),
  },
]);
