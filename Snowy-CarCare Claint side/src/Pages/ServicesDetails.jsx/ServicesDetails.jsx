import { useLoaderData } from 'react-router-dom';
import BannerComp from '../../Components/BannerComp/BannerComp';
import imgVi from '../../assets/images/ohters/imgVideo.png';

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
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default ServicesDetails;
