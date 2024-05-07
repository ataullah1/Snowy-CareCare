import { CgClose } from 'react-icons/cg';
import BannerComp from '../../Components/BannerComp/BannerComp';
import bannImg from '../../assets/images/banner/5.jpg';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../Provider/Provider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TiDelete } from 'react-icons/ti';

const ManageOrder = () => {
  const { userDta } = useContext(ContextAuth);
  const [data, setData] = useState([]);

  const url = `https://snowy-car-care-server-side.vercel.app/my-order?email=${userDta?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        // Code for handling the response
        setData(response.data);
      })
      .catch(() => {
        // Code for handling the error
        Swal.fire({
          title: 'Opppppppppssss!',
          text: 'Sorry, Your data is not comming!',
          icon: 'error',
        });
      });
  }, [url]);

  const [imgFullScreen, setImgFullScreen] = useState();
  const imageFullScreen = (img) => {
    // console.log(img);
    setImgFullScreen(img);
    document.getElementById('my_modal_3').showModal();
  };

  return (
    <div>
      <BannerComp nam={'My Order'} img={bannImg} />
      {/* Modal open image  */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[500px] w-full sm:w-[500] relative border border-firstColor">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl bg-slate-700 text-white hover:text-firstColor hover:bg-white border-2 border-slate-700 hover:border-firstColor">
              <CgClose />
            </button>
          </form>
          <div
            className="h-full w-full bg-cover bg-no-repeat rounded-md"
            style={{
              backgroundImage: `url(${imgFullScreen})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
      </dialog>
      {/* // Modal End */}
      <div className="my-16 overflow-x-auto">
        <table className="min-w-[930px] w-full">
          <tbody>
            {data.map((dta) => (
              <tr key={dta._id} className="text-xl ">
                <td className=" text-center font-bold bannerFont text-5xl">
                  <button className="hover:text-primeryColor">
                    <TiDelete />
                  </button>
                </td>
                <td className=" h-36 flex flex-col items-center justify-center w-40">
                  <div
                    className="h-32 w-full cursor-pointer rounded-md"
                    onClick={() => imageFullScreen(dta.img)}
                    style={{
                      backgroundImage: `url(${dta.img})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                </td>
                <td className=" px-2">
                  <div className="text-neutral-700 text-xl font-semibold">
                    {dta.title}
                  </div>
                  <div className=" text-neutral-400 text-base font-normal leading-[30px]">
                    Color : Green
                    <br />
                    Size: S
                  </div>
                </td>
                <td className=" px-2 text-neutral-700 text-xl font-semibold">
                  {dta.price}
                </td>
                <td className=" px-2 text-zinc-800 text-xl font-medium">
                  ${dta.date}
                </td>
                <td className=" px-2 text-center">
                  <button className="py-1.5 px-6 text-white bg-primeryColor border-2 border-primeryColor rounded-md hover:bg-transparent hover:text-primeryColor duration-200 active:scale-90">
                    Panding
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
