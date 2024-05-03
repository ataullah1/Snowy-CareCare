import timetable from '../../assets/icons/timetable.svg';
import location from '../../assets/icons/location.svg';
import call from '../../assets/icons/callSms.svg';
const BlackSec = () => {
  return (
    <div className='my-28'>
      <div className="w-full bg-neutral-900 rounded-xl py-14 lg:py-20 px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center gap-4">
          <img src={timetable} alt="" />
          <div>
            <div className="text-white text-base font-medium ">
              We are open monday-friday
            </div>
            <div className="text-white text-[25px] font-bold ">
              7:00 am - 9:00 pm
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={call} alt="" />
          <div>
            <div className="text-white text-base font-medium ">
              Have a question?
            </div>
            <div className="text-white text-[25px] font-bold ">
              +2546 251 2658
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <img src={location} alt="" />
          <div>
            <div className="text-white text-base font-medium ">
              Need a repair? our addresss
            </div>
            <div className="text-white text-[25px] font-bold ">
              Liza Street, New York
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackSec;
