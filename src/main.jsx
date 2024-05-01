import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import Route from './Routes/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Route} />
  </React.StrictMode>
);
