import { FaStar } from 'react-icons/fa';
import img1 from '../../assets/images/products/1.png';
const PopulerProducts = () => {
  return (
    <div>
      <div className="text-center pb-8">
        <h3 className="text-orange-600 text-xl font-bold">Popular Products</h3>
        <h1 className="text-neutral-900 text-[45px] font-bold">
          Browse Our Products
        </h1>
        <p className="max-w-[717px] mx-auto text-center text-neutral-500 text-base font-normal capitalize leading-[30px]">
          {` the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
        </p>
      </div>
      {/* Card Part  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="max-w-[450px] mx-auto w-full bg-white rounded-xl border border-gray-200 hover:border-none hover:shadow-md p-3 space-y-2 hover:scale-105 duration-200 cursor-pointer">
          <div className="w-full h-[215px] bg-zinc-100 rounded-xl py-5 text-center">
            <img className="h-full mx-auto w-auto" src={img1} alt="" />
          </div>
          <div className="flex items-center justify-center text-primeryColor text-xl pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-center text-neutral-700 text-[25px] font-bold ">
            Car Engine Plug
          </div>
          <div className="text-center text-orange-600 text-xl font-semibold ">
            $20.00
          </div>
        </div>
        <div className="max-w-[450px] mx-auto w-full bg-white rounded-xl border border-gray-200 hover:border-none hover:shadow-md p-3 space-y-2 hover:scale-105 duration-200 cursor-pointer">
          <div className="w-full h-[215px] bg-zinc-100 rounded-xl py-5 text-center">
            <img className="h-full mx-auto w-auto" src={img1} alt="" />
          </div>
          <div className="flex items-center justify-center text-primeryColor text-xl pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-center text-neutral-700 text-[25px] font-bold ">
            Car Engine Plug
          </div>
          <div className="text-center text-orange-600 text-xl font-semibold ">
            $20.00
          </div>
        </div>
        <div className="max-w-[450px] mx-auto w-full bg-white rounded-xl border border-gray-200 hover:border-none hover:shadow-md p-3 space-y-2 hover:scale-105 duration-200 cursor-pointer">
          <div className="w-full h-[215px] bg-zinc-100 rounded-xl py-5 text-center">
            <img className="h-full mx-auto w-auto" src={img1} alt="" />
          </div>
          <div className="flex items-center justify-center text-primeryColor text-xl pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-center text-neutral-700 text-[25px] font-bold ">
            Car Engine Plug
          </div>
          <div className="text-center text-orange-600 text-xl font-semibold ">
            $20.00
          </div>
        </div>
        <div className="max-w-[450px] mx-auto w-full bg-white rounded-xl border border-gray-200 hover:border-none hover:shadow-md p-3 space-y-2 hover:scale-105 duration-200 cursor-pointer">
          <div className="w-full h-[215px] bg-zinc-100 rounded-xl py-5 text-center">
            <img className="h-full mx-auto w-auto" src={img1} alt="" />
          </div>
          <div className="flex items-center justify-center text-primeryColor text-xl pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-center text-neutral-700 text-[25px] font-bold ">
            Car Engine Plug
          </div>
          <div className="text-center text-orange-600 text-xl font-semibold ">
            $20.00
          </div>
        </div>
        <div className="max-w-[450px] mx-auto w-full bg-white rounded-xl border border-gray-200 hover:border-none hover:shadow-md p-3 space-y-2 hover:scale-105 duration-200 cursor-pointer">
          <div className="w-full h-[215px] bg-zinc-100 rounded-xl py-5 text-center">
            <img className="h-full mx-auto w-auto" src={img1} alt="" />
          </div>
          <div className="flex items-center justify-center text-primeryColor text-xl pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-center text-neutral-700 text-[25px] font-bold ">
            Car Engine Plug
          </div>
          <div className="text-center text-orange-600 text-xl font-semibold ">
            $20.00
          </div>
        </div>
      </div>
      <div className="pt-11 text-center">
        <button className="px-5 py-2 border border-primeryColor text-primeryColor bg-transparent hover:bg-primeryColor hover:text-white hover:scale-110 active:scale-95 duration-200 font-semibold rounded-md">
          More Products
        </button>
      </div>
    </div>
  );
};

export default PopulerProducts;
