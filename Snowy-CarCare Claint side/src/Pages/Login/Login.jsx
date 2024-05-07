import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ContextAuth } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
const Login = () => {
  const { userDta, googleLogin, emlPassLogin, setLoading } =
    useContext(ContextAuth);
  const location = useLocation();
  const naviget = useNavigate();
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);

  const handleLoginSubmit = (e) => {
    setEmailErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const email = formDta.get('email');
    const pass = formDta.get('password');
    // console.log(email, pass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (pass.length < 6) {
      setPassErr('Please enter a valid password.');
      return;
    }
    // Email password Login
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
      });
      naviget('/');
      return;
    }
    emlPassLogin(email, pass)
      .then((userCredential) => {
        const userData = userCredential.user;
        console.log(userData);
        const user = { email };
        axios
          .post('https://snowy-car-care-server-side.vercel.app/jwt', user, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.success) {
              naviget(location.state ? location.state : '/');
            }
          });

        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };

  //   Social login
  const socialLogin = (socialLogin) => {
    if (userDta) {
      Swal.fire({
        title: 'Oops...!',
        text: 'Your account is already logged in!',
        icon: 'warning',
      });
      naviget('/');
      return;
    }
    socialLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
        naviget(location?.state ? location.state : '/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };

  return (
    <div className="flex items-center gap-6 mt-10 mb-16">
      <div className="w-full md:w-2/5">
        <img src={loginImg} alt="" />
      </div>
      <div className="w-full md:w-3/5">
        <div className="w-full rounded-xl border border-stone-300 p-6 sm:p-16 md:p-6 lg:p-16">
          <div className="text-center text-neutral-700 text-[40px] font-semibold pb-8">
            Sign In
          </div>

          <div>
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  className={
                    emailErr
                      ? 'input input-bordered flex items-center gap-2 border-red-500'
                      : 'input input-bordered flex items-center gap-2'
                  }
                >
                  <MdEmail />
                  <input
                    type="email"
                    name="email"
                    className="grow"
                    placeholder="Email"
                  />
                </label>
                {emailErr && (
                  <p className="text-sm text-red-500 italic">{emailErr}</p>
                )}
              </div>
              <div>
                <label className="relative input input-bordered flex items-center gap-2">
                  <RiLockPasswordFill />
                  <input
                    type={eye ? 'text' : 'password'}
                    className="grow"
                    name="password"
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute right-3"
                  >
                    {eye ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </label>{' '}
                {passErr && (
                  <p className="text-sm text-red-500 italic">{passErr}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    className="cursor-pointer form-checkbox text-redLi focus:ring-redLi h-4 w-4"
                  />{' '}
                  <label>Remember me</label>
                </div>

                <p className="underline cursor-pointer">Forgot Password</p>
              </div>
              <input
                className="py-1.5 px-4 w-full rounded-md bg-primeryColor border-2 border-primeryColor hover:bg-transparent duration-200 active:scale-90 text-white text-xl font-semibold hover:text-primeryColor"
                type="submit"
                value="Sign In"
              />
            </form>
            <div>
              <div className="text-neutral-700 text-lg font-medium  text-center py-3">
                Or Sign Up with
              </div>

              <div className="flex items-center justify-center gap-3 my-2">
                <button className="p-3 bg-[#F5F5F8] rounded-full text-lg hover:scale-125 duration-200">
                  <FaFacebookF />
                </button>
                <button className="p-3 bg-[#F5F5F8] rounded-full text-lg hover:scale-125 duration-200">
                  <FaLinkedinIn />
                </button>
                <button
                  onClick={() => socialLogin(googleLogin)}
                  className="p-3 bg-[#F5F5F8] rounded-full text-lg hover:scale-125 duration-200"
                >
                  <FcGoogle />
                </button>
              </div>

              <div className="text-center">
                <span className="text-neutral-500 text-lg font-normal ">
                  Create account?{' '}
                </span>
                <Link
                  to={'/signup'}
                  className="text-orange-600 text-lg font-semibold "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
