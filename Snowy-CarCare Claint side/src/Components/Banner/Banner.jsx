import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';
const Banner = () => {
  return (
    <div className="h-72 sm:h-96 lg:h-[550px] relative">
      <div className="carousel w-full h-full">
        <div
          id="slide1"
          className="carousel-item relative w-full h-full rounded-xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img5})`,
            backgroundPosition: 'center',
          }}
        >
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
        <div
          id="slide2"
          className="carousel-item relative w-full h-full rounded-xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute flex justify-end gap-4 right-5 bottom-5 z-50">
            <a
              href="#slide1"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide3"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full h-full rounded-xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute flex justify-end gap-4 right-5 bottom-5 z-50">
            <a
              href="#slide2"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide4"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full h-full rounded-xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute flex justify-end gap-4 right-5 bottom-5 z-50">
            <a
              href="#slide3"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide5"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full h-full rounded-xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute flex justify-end gap-4 right-5 bottom-5 z-50">
            <a
              href="#slide4"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide6"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className="carousel-item relative w-full h-full rounded-xl bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img6})`,
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute flex justify-end gap-4 right-5 bottom-5 z-50">
            <a
              href="#slide5"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowLeft />
            </a>
            <a
              href="#slide1"
              className="p-3 lg:p-4 rounded-full bg-[#FFFFFF33] text-white hover:bg-primeryColor"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="z-20 bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-start px-8 sm:px-16 lg:px-24">
        <div>
          <h1 className="max-w-[420px] lg:max-w-[463px] text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-[40px] sm:leading-[60px] lg:leading-[75px]">
            Affordable Price For Car Servicing
          </h1>
          <p className="max-w-[522px] text-white lg:text-lg font-normal  capitalize lg:leading-[30px] py-2 sm:py-4 lg:py-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-4 items-center">
            <button className="px-3 sm:px-5 border border-primeryColor bg-primeryColor py-2 text-white rounded-md text-sm sm:text-base font-semibold">
              Discover More
            </button>
            <button className="px-3 sm:px-5 border border-white bg-transparent py-2 text-white rounded-md text-sm sm:text-base font-semibold">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
