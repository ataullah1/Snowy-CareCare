import { useLoaderData } from 'react-router-dom';
import BannerComp from '../../Components/BannerComp/BannerComp';

const ServicesDetails = () => {
  const dta = useLoaderData();
  const { img } = dta;
  console.log(dta);
  return (
    <div>
      <BannerComp img={img} nam={'Service Details'} />
      <h1 className="text-4xl"> services details page </h1>
    </div>
  );
};

export default ServicesDetails;
