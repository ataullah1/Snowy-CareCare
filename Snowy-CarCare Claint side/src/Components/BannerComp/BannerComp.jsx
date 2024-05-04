import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import linkImg from '../../assets/images/ohters/Vector.png';
const BannerComp = ({ img, nam }) => {
  //   console.log(img,name);

  return (
    <div>
      <div
        className="w-full h-48 sm:h-56 md:h-[300px] rounded-xl bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl h-full w-full flex items-center justify-start">
          <h1 className="px-8 md:px-16 lg:px-24 text-white text-3xl md:text-[45px] font-bold">
            {nam}
          </h1>
        </div>
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          src={linkImg}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 text-white text-xl font-medium">
          <Link to={'/'}>Home</Link> / <Link>{nam}</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerComp;
BannerComp.propTypes = {
  img: PropTypes.string,
  nam: PropTypes.string,
};
