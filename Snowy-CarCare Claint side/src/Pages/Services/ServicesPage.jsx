import BannerComp from '../../Components/BannerComp/BannerComp';
import bnnerIm from '../../assets/images/banner/4.jpg';
import Services from '../../Components/Services/Services';
import { useLoaderData } from 'react-router-dom';
const ServicesPage = () => {
  const services = useLoaderData();
  return (
    <div className="">
      <BannerComp nam={'Our Services'} img={bnnerIm} />
      <div className="py-16">
        <Services dta={services} />
      </div>
    </div>
  );
};

export default ServicesPage;
