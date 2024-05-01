import { Link } from 'react-router-dom';
import err from '../../assets/error.png';
const Error = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <img src={err} alt="" />
      <Link to={'/'} className="py-2 px-5 mt-10 font-semibold border border-primeryColor rounded-md  text-primeryColor">
        Go to home
      </Link>
    </div>
  );
};

export default Error;
