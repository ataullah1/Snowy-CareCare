import moduleName from '../../assets/images/team/1.jpg';
import fb from '../../assets/icons/fb.svg';
import ig from '../../assets/icons/ig.png';
import linkedin from '../../assets/icons/in.svg';
import x from '../../assets/icons/x.svg';

const Team = () => {
  return (
    <div className="my-28">
      <div className="text-center pb-8">
        <h3 className="text-orange-600 text-xl font-bold">Team</h3>
        <h1 className="text-neutral-900 text-[45px] font-bold">
          Meet Our Team
        </h1>
        <p className="max-w-[717px] mx-auto text-center text-neutral-500 text-base font-normal capitalize leading-[30px]">
          {`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
        </p>
      </div>
      {/* Card Part  */}
      <div>
        <div className="w-[364px] p-5 border rounded-xl">
          <div
            className="w-full h-[290px] rounded-xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${moduleName})`,
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="">
            <h1 className="pt-4 text-center text-neutral-700 text-[25px] font-bold ">
              Car Engine Plug
            </h1>
            <h3 className="text-center text-neutral-500 text-xl font-semibold pb-4">
              Engine Expert
            </h3>
            <div className="flex items-center gap-2 justify-center">
              <a href="#">
                <img
                  className="h-9 w-9 hover:scale-125 duration-200"
                  src={fb}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-9 w-9 hover:scale-125 duration-200"
                  src={x}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-9 w-9 hover:scale-125 duration-200"
                  src={linkedin}
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-9 w-9 hover:scale-125 duration-200"
                  src={ig}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
