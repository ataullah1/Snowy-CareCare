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
import ServicesPage from '../Pages/Services/ServicesPage';
import MyOrder from '../Pages/MyOrder/MyOrder';
import ManageOrder from '../Pages/ManageOrder/ManageOrder';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () =>
          fetch('https://snowy-car-care-server-side.vercel.app/car-services'),
      },
      {
        path: '/service-details/:id',
        element: (
          <PrivetRoute>
            <ServicesDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://snowy-car-care-server-side.vercel.app/car-services/${params.id}`
          ),
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivetRoute>
            <Checkout />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://snowy-car-care-server-side.vercel.app/car-services/${params.id}`
          ),
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      {
        path: '/services',
        element: <ServicesPage />,
        loader: () =>
          fetch('https://snowy-car-care-server-side.vercel.app/car-services'),
      },
      { path: '/manage-order', element: <ManageOrder /> },
      {
        path: '/my-order',
        element: (
          <PrivetRoute>
            <MyOrder />
          </PrivetRoute>
        ),
      },
      { path: '/about', element: <About /> },
    ],
  },
]);
export default Route;
