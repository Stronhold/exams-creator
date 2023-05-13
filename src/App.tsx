
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './home/Home';
import React from 'react';
import Root from './shared/Root/Root';
import Subject from './subject/Subject';
import Test from './test/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/subject/:subject",
        element: <Subject />
      },
      {
        path: "/subject/:subject/test/:test",
        element: <Test />
      }
    ]
  },
  
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
