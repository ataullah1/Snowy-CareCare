import { useLoaderData, useNavigate } from 'react-router-dom';
import BannerComp from '../../Components/BannerComp/BannerComp';
import { useContext } from 'react';
import { ContextAuth } from '../../Provider/Provider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Checkout = () => {
  const navige = useNavigate();
  const allData = useLoaderData();
  const { userDta } = useContext(ContextAuth);
  const name = userDta.displayName.split(' ');
  // console.log(userDta);
  const handleChecout = (e) => {
    e.preventDefault();
    const dta = e.target;
    const fname = dta.firstName.value;
    const lname = dta.lastName.value;
    const name = fname + ' ' + lname;
    const email = userDta.email;
    const number = dta.number.value;
    const message = dta.message.value;
    const title = allData.title;
    const img = allData.img;
    const price = allData.price;
    const date =
      new Date().getDate() +
      '-' +
      (parseInt(new Date().getMonth()) + 1) +
      '-' +
      new Date().getFullYear();
    // const orderDta = {
    //   name,
    //   email,
    //   number,
    //   message,
    //   title,
    //   img,
    //   price,
    //   date,
    // };
    // console.log(orderDta);

    axios
      .post('http://localhost:3000/order', {
        name,
        email,
        number,
        message,
        title,
        img,
        price,
        date,
      })
      .then(function (response) {
        console.log(response);
        Swal.fire({
          title: 'Good job!',
          text: 'You have successfully placed the order.',
          icon: 'success',
        });
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          title: 'Oppppppps!',
          text: 'Sorry you failed to order!',
          icon: 'error',
        });
      });
    navige('/services');
  };

  return (
    <div>
      <BannerComp nam={'Check Out'} img={allData.img} />
      <div>
        <div className="w-full my-28 bg-zinc-100 rounded-xl p-5 sm:p-20">
          <form onSubmit={handleChecout} className="flex flex-col space-y-5">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                className="w-full px-4 py-2 border-none outline-none bg-white rounded-md"
                type="text"
                name="firstName"
                required
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
                type="number"
                required
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
              required
              id=""
              className="px-4 py-2 h-36 w-full outline-none bg-white rounded-md"
              placeholder="Your Message"
            ></textarea>
            <input
              type="submit"
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
