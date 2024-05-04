import { useLoaderData } from 'react-router-dom';
import BannerComp from '../../Components/BannerComp/BannerComp';
import { useContext } from 'react';
import { ContextAuth } from '../../Provider/Provider';

const Checkout = () => {
  const dta = useLoaderData();
  const { userDta } = useContext(ContextAuth);
  const name = userDta.displayName.split(' ');

  console.log(userDta);
  return (
    <div>
      <BannerComp nam={'Check Out'} img={dta.img} />
      <div>
        <div className="w-full my-28 bg-zinc-100 rounded-xl p-5 sm:p-20">
          <form className="flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                className="w-full px-4 py-2 border-none outline-none bg-white rounded-md"
                type="text"
                name="firstName"
                placeholder="First name"
                defaultValue={name[0]}
              />
              <input
                className="w-full px-4 py-2 border-none outline-none bg-white rounded-md"
                type="text"
                name="lastName"
                placeholder="Last name"
                defaultValue={name[1] && name[1]}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                className="w-full px-4 py-2 border-none outline-none bg-white rounded-md"
                type="text"
                placeholder="Your Phone"
                name="number"
                defaultValue={userDta?.phoneNumber && userDta.phoneNumber}
              />
              <input
                className="w-full px-4 py-2 border-none outline-none bg-white rounded-md"
                type="text"
                placeholder="Your Email"
                defaultValue={userDta.email}
                name="email"
              />
            </div>
            <textarea
              name="message"
              id=""
              className="px-4 py-2 h-36 w-full outline-none bg-white rounded-md"
              placeholder="Your Message"
            ></textarea>
            <input
              type="button"
              value="Order Confirm"
              className="py-1.5 border-2 bg-primeryColor border-primeryColor hover:bg-transparent hover:text-primeryColor text-white duration-200 active:scale-95 w-full rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
