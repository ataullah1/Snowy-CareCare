import img1 from '../../assets/images/about_us/person.jpg';
import img2 from '../../assets/images/about_us/parts.jpg';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-8 lg:gap-14">
      <div className="w-full md:w-1/2">
        <div className="relative w-full md:w-[350px] lg:w-[420px]">
          <div
            className="w-full h-80 lg:h-[473px] rounded-xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: 'center',
            }}
          ></div>
          <div
            className="w-[250px] lg:w-[310px] h-[255px] lg:h-[320px] bg-black/opacity-20 rounded-xl border-8 border-white bg-cover bg-no-repeat absolute -bottom-20 right-0 md:-right-14 z-30"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-7 md:space-y-0 lg:space-y-5">
        <h3 className="text-orange-600 text-xl font-bold">About Us</h3>
        <h1 className="md:max-w-[376px] text-neutral-900 text-4xl lg:text-[45px] font-bold sm:leading-[45px] lg:leading-[60px]">
          We are qualified & of experience in this field
        </h1>
        <p className="md:max-w-[489px] text-neutral-500 text-base font-normal capitalize lg:leading-[30px]">
          {`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.`}
          <br />
          {` the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.`}
        </p>
        <button className="px-3 sm:px-5 mt-4 border border-primeryColor bg-primeryColor hover:bg-transparent hover:text-primeryColor duration-150 hover:translate-x-3 py-2 text-white rounded-md text-sm sm:text-base font-semibold">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
