import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Error from '../Pages/Error/Error';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:3000/car-services'),
      },
      { path: '/about', element: <About /> },
    ],
  },
]);
export default Route;
