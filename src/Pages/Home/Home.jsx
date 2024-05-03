import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-28">
        <AboutUs />
      </div>
      <Services />
    </div>
  );
};

export default Home;
