import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Loding from '../Pages/Loding/Loding';
import { ContextAuth } from '../Provider/Provider';
const PrivetRoute = ({ children }) => {
  const { userDta, loading } = useContext(ContextAuth);
  const location = useLocation();
  if (loading) {
    return <Loding />;
  }
  if (userDta) {
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname} />;
};

export default PrivetRoute;
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
