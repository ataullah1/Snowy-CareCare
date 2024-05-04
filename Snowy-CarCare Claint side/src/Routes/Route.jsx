import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Error from '../Pages/Error/Error';
import ServicesDetails from '../Pages/ServicesDetails.jsx/ServicesDetails';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Signup/SignUp';
import PrivetRoute from './PrivetRoute';
import Checkout from '../Pages/CheckOut/Checkout';

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
        element: (
          <PrivetRoute>
            <ServicesDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/car-services/${params.id}`),
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivetRoute>
            <Checkout />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/car-services/${params.id}`),
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/about', element: <About /> },
    ],
  },
]);
export default Route;
