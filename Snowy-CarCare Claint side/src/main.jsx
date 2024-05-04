import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import Route from './Routes/Route';
import Provider from './Provider/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={Route} />
    </Provider>
  </React.StrictMode>
);
