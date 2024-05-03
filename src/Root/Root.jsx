import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto max-w-[1700px]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
