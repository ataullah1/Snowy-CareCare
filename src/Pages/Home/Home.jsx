import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import BlackSec from '../../Components/BlackSec/BlackSec';
import Team from '../../Components/OurTeam/Team';
import PopulerProducts from '../../Components/PopulerProducts/PopulerProducts';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-28">
        <AboutUs />
      </div>
      <Services />
      <BlackSec />
      <PopulerProducts />
      <Team />
    </div>
  );
};

export default Home;
