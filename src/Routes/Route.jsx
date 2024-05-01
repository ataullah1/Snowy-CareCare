import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
]);
export default Route;
