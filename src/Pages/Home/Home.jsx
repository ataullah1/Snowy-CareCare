import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-28">
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
