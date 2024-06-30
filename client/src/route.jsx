import React from "react";
import { useRoutes } from "react-router-dom";
import Nav from "./layouts/Nav";
import NavFoot from "./layouts/NavFoot";
import {
  Hero,
} from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavFoot />,
      children: [{ path: "", element: <Hero /> }],
    },
   
    {
      path: "/",
      element: <Nav/>,
      children: [
      ],
    },
  ]);
}
