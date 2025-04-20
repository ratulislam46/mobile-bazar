import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Page/Root/Root";
import Home from "../Page/Home/Home";
import Hello from "../Page/Hello/Hello";
import ViewDetails from "../Page/ViewDetails/ViewDeta";
import ViewDeta from "../Page/ViewDetails/ViewDeta";
import Favorites from '../Page/Favorites/Favorites'
import Card from "../Page/Card/Card";
import About from "../Page/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('data.json'),
        hydrateFallbackElement: <p>Loading, Please wait ....</p>,
        Component: Home
      },
      {
        path: '/hello',
        Component: Hello
      },
      {
        path: '/view-detils/:id',
        loader: () => fetch('../data.json'),
        hydrateFallbackElement: <p>Loading, Please wait .... </p>,
        Component: ViewDeta,
      },
      {
        path: '/favorites',
        Component: Favorites
      },
      {
        path: '/about',
        Component : About
      },
      {
        path:'/card',
        Component : Card
      }
    ]
  },


]);