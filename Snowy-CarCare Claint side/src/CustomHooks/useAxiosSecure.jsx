import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'https://snowy-car-care-server-side.vercel.app',
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutAcc } = useAuth();
  const naviget = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log('error trackeedin: ', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('Log Out The user');
          logOutAcc().then(() => {
            naviget('/login');
          });
        }
      }
    );
  }, [logOutAcc, naviget]);

  return axiosSecure;
};

export default useAxiosSecure;
