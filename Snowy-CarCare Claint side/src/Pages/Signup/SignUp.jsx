import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaLinkedinIn,
  FaUserAlt,
} from 'react-icons/fa';
import { useContext, useState } from 'react';
import { ContextAuth } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import { TbPasswordFingerprint } from 'react-icons/tb';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
const SignUp = () => {
  const {
    userDta,
    googleLogin,
    emlPassRegister,
    profileUpdate,
    logOutAcc,
    setLoading,
  } = useContext(ContextAuth);
  const naviget = useNavigate();

  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [confPassErr, setConfPassErr] = useState(null);

  // const [imgNam, setImgNam] = useState({});
  const handleSignUpSubmit = (e) => {
    setEmailErr(null);
    setPassErr(null);
    setConfPassErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const name = formDta.get('name');
    const photo = formDta.get('img');
    // setImgNam({ nam: name, pic: photo });
    const email = formDta.get('email');
    const pass = formDta.get('password');
    const confPass = formDta.get('confirmPass');
    // console.log(name, photo, imgNam, email, pass, confPass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (!isValidPass.test(pass)) {
      setPassErr('Please input Uppercase, Lowercase and at least 6 digits.');
      return;
    } else if (pass !== confPass) {
      setConfPassErr('Password is not matched.');
      return;
    }
    // Email password Register
    emlPassRegister(email, pass)
      .then(() => {
        // Update Profile
        profileUpdate(name, photo)
          .then(() => {
            Swal.fire({
              title: 'Good job!',
              text: 'Your account has been successfully created. Please login now.',
              icon: 'success',
            });
          })
          .catch((err) => {
            console.log(err);
          });
        logOutAcc();
        naviget('/login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be Created !',
          icon: 'error',
        });
      });
  };

  // Social login
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
            Sign Up
          </div>

          <div>
            <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
              <label className="input input-bordered flex items-center gap-2">
                <FaUserAlt />
                <input
                  type="text"
                  name="name"
                  className="grow"
                  required
                  placeholder="Your Name"
                />
              </label>
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
                  <p className="text-sm text-red-500 italic pt-1">{emailErr}</p>
                )}
              </div>
              <div>
                <label
                  className={
                    passErr
                      ? 'relative input input-bordered flex items-center gap-2 border-red-500'
                      : 'relative input input-bordered flex items-center gap-2'
                  }
                >
                  <RiLockPasswordFill />
                  <input
                    type={eye ? 'text' : 'password'}
                    name="password"
                    className="grow"
                    required
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-xl absolute right-3"
                  >
                    {eye ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </label>
                {passErr && (
                  <p className="text-sm text-red-500 italic pt-1">{passErr}</p>
                )}
              </div>
              <div>
                <label
                  className={
                    confPassErr
                      ? 'input input-bordered flex items-center gap-2 border-red-500'
                      : 'input input-bordered flex items-center gap-2'
                  }
                >
                  <TbPasswordFingerprint />
                  <input
                    type="password"
                    className="grow"
                    name="confirmPass"
                    placeholder="Confirm Password"
                  />
                </label>
                {confPassErr && (
                  <p className="text-sm text-red-500 italic pt-1">
                    {confPassErr}
                  </p>
                )}
              </div>
              <p></p>
              <label>
                <input type="checkbox" /> I agree to the
                <Link to={'/privecy-policy'} className="text-redLi">
                  {' '}
                  Privacy Policy
                </Link>
              </label>
              <input
                className="py-1.5 px-4 w-full rounded-md bg-primeryColor border-2 border-primeryColor hover:bg-transparent duration-200 active:scale-90 text-white text-xl font-semibold hover:text-primeryColor"
                type="submit"
                value="Sign Up"
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
                  Already have an account?{' '}
                </span>
                <Link
                  to={'/login'}
                  className="text-orange-600 text-lg font-semibold "
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
