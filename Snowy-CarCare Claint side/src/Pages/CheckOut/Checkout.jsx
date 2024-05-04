import { useLoaderData } from 'react-router-dom';
import BannerComp from '../../Components/BannerComp/BannerComp';

const Checkout = () => {
  const dta = useLoaderData();
  return (
    <div>
      <BannerComp nam={dta.title} img={dta.img} />
    </div>
  );
};

export default Checkout;
