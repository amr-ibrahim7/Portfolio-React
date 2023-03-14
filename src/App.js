import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/project',
      element: <Project />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
