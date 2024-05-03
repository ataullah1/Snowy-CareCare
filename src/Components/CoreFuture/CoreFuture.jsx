import img1 from '../../assets/icons/group.svg';
import img2 from '../../assets/icons/timely.svg';
import img3 from '../../assets/icons/person.svg';
import img4 from '../../assets/icons/Equipment.svg';
import img5 from '../../assets/icons/garanty.svg';
import img6 from '../../assets/icons/deliveryt.svg';
const CoreFuture = () => {
  return (
    <div>
      <div className="text-center pb-8">
        <h3 className="text-orange-600 text-xl font-bold">Core Features</h3>
        <h1 className="text-neutral-900 text-[45px] font-bold">
          Why Choose Us
        </h1>
        <p className="max-w-[717px] mx-auto text-center text-neutral-500 text-base font-normal capitalize leading-[30px]">
          {`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
        </p>
      </div>
      {/* Card Part  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div className="h-36 w-40 p-3 rounded-xl border flex-col flex items-center justify-center gap-3 hover:text-primeryColor hover:border-primeryColor hover:shadow hover:scale-105 duration-200 mx-auto">
          <img src={img1} alt="" />
          <p className="text-lg font-semibold">Expert Team</p>
        </div>
        <div className="h-36 w-40 p-3 rounded-xl border flex-col flex items-center justify-center gap-3 hover:text-primeryColor hover:border-primeryColor hover:shadow hover:scale-105 duration-200 mx-auto">
          <img src={img2} alt="" />
          <p className="text-lg font-semibold">Timely Delivery</p>
        </div>
        <div className="h-36 w-40 p-3 rounded-xl border flex-col flex items-center justify-center gap-3 hover:text-primeryColor hover:border-primeryColor hover:shadow hover:scale-105 duration-200 mx-auto">
          <img src={img3} alt="" />
          <p className="text-lg font-semibold">24/7 Support</p>
        </div>
        <div className="h-36 w-40 p-2 rounded-xl border flex-col flex items-center justify-center gap-3 hover:text-primeryColor hover:border-primeryColor hover:shadow hover:scale-105 duration-200 mx-auto">
          <img src={img4} alt="" />
          <p className="text-lg font-semibold">Best Equipment</p>
        </div>
        <div className="h-36 w-40 p-3 rounded-xl border flex-col flex items-center justify-center gap-3 hover:text-primeryColor hover:border-primeryColor hover:shadow hover:scale-105 duration-200 mx-auto">
          <img src={img5} alt="" />
          <p className="text-lg font-semibold">100% Guranty</p>
        </div>
        <div className="h-36 w-40 p-3 rounded-xl border flex-col flex items-center justify-center gap-3 hover:text-primeryColor hover:border-primeryColor hover:shadow hover:scale-105 duration-200 mx-auto">
          <img src={img6} alt="" />
          <p className="text-lg font-semibold">Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default CoreFuture;
