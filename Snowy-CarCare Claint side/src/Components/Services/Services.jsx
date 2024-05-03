import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Services = ({ dta }) => {
  const [show, setShow] = useState(6);
  return (
    <div>
      <div className="text-center pb-8">
        <h3 className="text-orange-600 text-xl font-bold">Service</h3>
        <h1 className="max-w-[376px] mx-auto text-neutral-900 text-[45px] font-bold">
          Our Service Area
        </h1>
        <p className="max-w-[717px] mx-auto text-center text-neutral-500 text-base font-normal capitalize leading-[30px]">
          {` the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.`}
        </p>
      </div>
      {/* Card Part  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dta.slice(0, show).map((data) => (
          <div
            key={data._id}
            className="w-full max-w-[450px] p-3 lg:p-5 hover:scale-105 duration-200 bg-white rounded-xl border border-gray-200 space-y-3 mx-auto"
          >
            <div
              className="w-full h-52 rounded-xl bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="text-neutral-700 text-[25px] font-bold ">
              {data.title}
            </div>
            <div className="text-orange-600 text-xl font-semibold flex justify-between items-center">
              Price : ${data.price}
              <span className="text-3xl hover:scale-110 hover:translate-x-1 duration-200 cursor-pointer">
                <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-11 text-center">
        <button className="px-5 py-2 border border-primeryColor text-primeryColor bg-transparent hover:bg-primeryColor hover:text-white hover:scale-110 active:scale-95 duration-200 font-semibold rounded-md" onClick={()=>setShow(dta.length)}>
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
Services.propTypes = {
  dta: PropTypes.array,
};
