import { useLoaderData } from 'react-router-dom';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import BlackSec from '../../Components/BlackSec/BlackSec';
import CoreFuture from '../../Components/CoreFuture/CoreFuture';
import Team from '../../Components/OurTeam/Team';
import PopulerProducts from '../../Components/PopulerProducts/PopulerProducts';
import Services from '../../Components/Services/Services';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Banner />
      <div className="my-28">
        <AboutUs />
      </div>
      <Services dta={services} />
      <BlackSec />
      <PopulerProducts />
      <Team />
      <CoreFuture />
      <div className="my-28">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
