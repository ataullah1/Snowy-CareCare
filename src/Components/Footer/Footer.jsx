import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logoFooter.svg';

const Footer = () => {
  return (
    <div>
      <div className="w-full pt-28 bg-neutral-900">
        <div className="w-11/12 lg:w-10/12 mx-auto max-w-[1700px] grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-14">
          <div className="col-span-4 lg:col-span-2">
            <img src={logo} alt="" />

            <div className="pt-6 pb-4 w-[283px] text-gray-200 text-base font-normal leading-relaxed">
              Edwin Diaz is a software and web technologies engineer, a life
              coach trainer who is also a serial .
            </div>
            <div className="flex gap-3 items-center">
              <span className="p-3 rounded-full bg-slate-700 text-white text-xl hover:scale-125 duration-200">
                <FaGoogle />
              </span>
              <span className="p-3 rounded-full bg-slate-700 text-white text-xl hover:scale-125 duration-200">
                <FaTwitter />
              </span>
              <span className="p-3 rounded-full bg-slate-700 text-white text-xl hover:scale-125 duration-200">
                <FaInstagram />
              </span>
              <span className="p-3 rounded-full bg-slate-700 text-white text-xl hover:scale-125 duration-200">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="">
            <div className="text-white text-xl font-semibold pb-12">About</div>
            <div className="text-zinc-100 text-base font-normal  leading-10">
              Home
              <br />
              Service
              <br />
              Contact
            </div>
          </div>
          <div className="">
            <div className="text-white text-xl font-semibold pb-12">
              Company
            </div>
            <div className="text-zinc-100 text-base font-normal  leading-10">
              Why Car Doctor <br />
              About
            </div>
          </div>
          <div className="">
            <div className="text-white text-xl font-semibold pb-12">
              Support
            </div>
            <div className="text-zinc-100 text-base font-normal  leading-10">
              Support Center
              <br />
              Feedback
              <br />
              Accesbility
            </div>
          </div>
        </div>
        <p className="text-white text-center italic pt-14 pb-5">
          Copyright © 2024 - All right reserved by{' '}
          <a href="#" className="border-b border-primeryColor">
            Md Ataullah
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
