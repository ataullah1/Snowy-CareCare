import { useLoaderData } from 'react-router-dom';
import BannerComp from '../../Components/BannerComp/BannerComp';
import imgVi from '../../assets/images/ohters/imgVideo.png';
import pages from '../../assets/images/ohters/pages.svg';
import logo from '../../assets/logoFooter.svg';
import { FaArrowRight } from 'react-icons/fa';

const ServicesDetails = () => {
  const dta = useLoaderData();
  const { img } = dta;
  console.log(dta);
  return (
    <div>
      <BannerComp img={img} nam={'Service Details'} />

      <div className="flex gap-4 mt-24 mb-20">
        <div className="w-2/3 space-y-8">
          <div
            className="h-[400px] rounded-xl w-full bg-cover bg-no-repeat relative"
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: 'center',
            }}
          ></div>
          <h1 className="text-neutral-900 text-[35px] font-bold font-['Inter']">
            Unique Car Engine Service
          </h1>
          <p className=" text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">
            {`            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.`}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="max-w-[364px] w-full bg-zinc-100 rounded-xl border-t-2 border-orange-600 p-8">
              <h3 className="text-neutral-700 text-xl font-bold font-['Inter']">
                Instant Car Services
              </h3>
              <p className="w-[282px] text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="max-w-[364px] w-full bg-zinc-100 rounded-xl border-t-2 border-orange-600 p-8">
              <h3 className="text-neutral-700 text-xl font-bold font-['Inter']">
                Instant Car Services
              </h3>
              <p className="w-[282px] text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="max-w-[364px] w-full bg-zinc-100 rounded-xl border-t-2 border-orange-600 p-8">
              <h3 className="text-neutral-700 text-xl font-bold font-['Inter']">
                Instant Car Services
              </h3>
              <p className="w-[282px] text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="max-w-[364px] w-full bg-zinc-100 rounded-xl border-t-2 border-orange-600 p-8">
              <h3 className="text-neutral-700 text-xl font-bold font-['Inter']">
                Instant Car Services
              </h3>
              <p className="w-[282px] text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <div className=" text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">
            {`            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.`}
          </div>
          <div className="text-neutral-900 text-[35px] font-bold font-['Inter']">
            3 Simple Steps to Process
          </div>
          <div className="text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-[30px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`}</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="w-full p-8 text-center rounded-xl border border-gray-200">
              <div className="bg-[#FF38111A] inline-block rounded-full p-3">
                <h1 className="bg-primeryColor rounded-full p-3 text-white text-xl font-bold font-['Inter'] uppercase h-14 w-14 flex items-center justify-center">
                  01
                </h1>
              </div>
              <h2 className="text-neutral-900 text-xl font-bold font-['Inter'] uppercase">
                Step One
              </h2>
              <p className=" text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-relaxed">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="w-full p-8 text-center rounded-xl border border-gray-200">
              <div className="bg-[#FF38111A] inline-block rounded-full p-3">
                <h1 className="bg-primeryColor rounded-full p-3 text-white text-xl font-bold font-['Inter'] uppercase h-14 w-14 flex items-center justify-center">
                  02
                </h1>
              </div>
              <h2 className="text-neutral-900 text-xl font-bold font-['Inter'] uppercase">
                Step Two
              </h2>
              <p className=" text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-relaxed">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="w-full p-8 text-center rounded-xl border border-gray-200">
              <div className="bg-[#FF38111A] inline-block rounded-full p-3">
                <h1 className="bg-primeryColor rounded-full p-3 text-white text-xl font-bold font-['Inter'] uppercase h-14 w-14 flex items-center justify-center">
                  03
                </h1>
              </div>
              <h2 className="text-neutral-900 text-xl font-bold font-['Inter'] uppercase">
                Step Three
              </h2>
              <p className=" text-center text-neutral-500 text-base font-normal font-['Inter'] capitalize leading-relaxed">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>
          <img className="max-w-[752px] w-full rounded-xl" src={imgVi} />
        </div>
        <div className="w-1/3 space-y-8">
          <div className="w-ful bg-zinc-100 rounded-xl p-8">
            <div className="text-neutral-900 text-[25px] font-bold font-['Inter']">
              Services
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-full py-3 flex items-center justify-between px-3 bg-white hover:bg-primeryColor rounded-md text-slate-900 hover:text-white">
                <div className=" text-base font-semibold font-['Inter']">
                  Full Car Repair
                </div>
                <button className="">
                  <FaArrowRight />
                </button>
              </div>
              <div className="w-full py-3 flex items-center justify-between px-3 bg-white hover:bg-primeryColor rounded-md text-slate-900 hover:text-white">
                <div className=" text-base font-semibold font-['Inter']">
                  Engine Repair
                </div>
                <button className="">
                  <FaArrowRight />
                </button>
              </div>
              <div className="w-full py-3 flex items-center justify-between px-3 bg-white hover:bg-primeryColor rounded-md text-slate-900 hover:text-white">
                <div className=" text-base font-semibold font-['Inter']">
                  Automatic Services
                </div>
                <button className="">
                  <FaArrowRight />
                </button>
              </div>
              <div className="w-full py-3 flex items-center justify-between px-3 bg-white hover:bg-primeryColor rounded-md text-slate-900 hover:text-white">
                <div className=" text-base font-semibold font-['Inter']">
                  Engine Oil Change
                </div>
                <button className="">
                  <FaArrowRight />
                </button>
              </div>
              <div className="w-full py-3 flex items-center justify-between px-3 bg-white hover:bg-primeryColor rounded-md text-slate-900 hover:text-white">
                <div className=" text-base font-semibold font-['Inter']">
                  Battery Charge
                </div>
                <button className="">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 bg-neutral-900 rounded-xl p-4">
            <h2 className="text-white text-[25px] font-bold font-['Inter']">
              Download
            </h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={pages} alt="" />
                <div>
                  <div className="text-white text-lg font-semibold font-['Inter']">
                    Our Brochure
                  </div>
                  <div className="text-neutral-400 text-base font-normal font-['Inter']">
                    Download
                  </div>
                </div>
              </div>
              <button className="p-4 text-white bg-orange-600 rounded-[5px]">
                <FaArrowRight />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={pages} alt="" />
                <div>
                  <div className="text-white text-lg font-semibold font-['Inter']">
                    Company Details
                  </div>
                  <div className="text-neutral-400 text-base font-normal font-['Inter']">
                    Download
                  </div>
                </div>
              </div>
              <button className="p-4 text-white bg-orange-600 rounded-[5px]">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="w-full space-y-4 bg-neutral-900 rounded-xl p-6 text-center pb-10">
            <img className="mx-auto" src={logo} alt="" />
            <h2 className="text-center text-white text-xl font-bold font-['Inter'] leading-[35px]">
              Need Help? We Are Here
              <br />
              To Help You
            </h2>
            <div className="relative bg-white rounded-xl p-5 pb-8">
              <div className="text-center text-xl font-bold">
                <span className="text-orange-600">Car Doctor </span>
                <span className="text-neutral-900">Special</span>
              </div>
              <div className="text-center text-base font-bold">
                <span className="text-neutral-500">Save up to</span>
                <span className="text-orange-600">60% off</span>
              </div>
              <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40 py-2 bg-orange-600 rounded-md text-white text-lg font-semibold ">
                Get A Quote
              </button>
            </div>
          </div>
          <div className="text-neutral-900 text-[35px] font-bold font-['Inter']">
            Price $250.00
          </div>
          <button className="w-full py-2 text-white bg-primeryColor rounded-md font-semibold">Proceed Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
