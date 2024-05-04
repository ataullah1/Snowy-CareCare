import img1 from '../../assets/images/profile/img1.png';
import quote from '../../assets/icons/quote 1.svg';
import { FaStar } from 'react-icons/fa';
const Testimonial = () => {
  return (
    <div>
      <div className="text-center pb-8">
        <h3 className="text-orange-600 text-xl font-bold">Testimonial</h3>
        <h1 className="text-neutral-900 text-[45px] font-bold">
          What Customer Says
        </h1>
        <p className="max-w-[717px] mx-auto text-center text-neutral-500 text-base font-normal capitalize leading-[30px]">
          {`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
        </p>
      </div>
      {/* Card Part  */}
      <div>
        <div className="w-[558px] bg-white rounded-xl border p-5">
          <div className="flex gap-24 items-center">
            <div className="flex items-center gap-3">
              <img src={img1} alt="" />
              <div>
                <h1 className="text-neutral-700 text-[25px] font-bold">
                  Kurmur Hosen
                </h1>
                <h3 className="text-neutral-500 text-xl font-semibold ">
                  Businessman
                </h3>
              </div>
            </div>
            <img src={quote} alt="" />
          </div>
          <div>
            <div className="pt-4 max-w-[489px] text-neutral-500 text-base font-normal capitalize leading-[30px]">
              {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
            </div>
            <div className="flex items-center text-primeryColor text-xl pt-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
