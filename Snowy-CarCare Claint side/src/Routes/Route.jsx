import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Error from '../Pages/Error/Error';
import ServicesDetails from '../Pages/ServicesDetails.jsx/ServicesDetails';

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
      {
        path: '/service-details/:id',
        element: <ServicesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/car-services/${params.id}`),
      },
      { path: '/about', element: <About /> },
    ],
  },
]);
export default Route;
