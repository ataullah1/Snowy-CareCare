import { useContext } from 'react';
import { ContextAuth } from '../Provider/Provider';

const useAuth = () => {
  const auth = useContext(ContextAuth);
  return auth;
};

export default useAuth;
