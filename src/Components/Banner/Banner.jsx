import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';
const Banner = () => {
  return (
    <div className="h-72 sm:h-96 lg:h-[550px]">
      <div className="carousel w-full h-full relative">
        <div
          id="slide1"
          className="carousel-item relative w-full rounded-xl  bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img5})`,
            backgroundPosition: 'center',
          }}
        >
          {/* <img src={img5} className="w-full rounded-xl" /> */}
          <div className="absolute flex justify-end gap-4 right-5 bottom-5 z-50">
            <a
              href="#slide6"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide2"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl absolute top-0 left-0 right-0 bottom-0 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Banner;
