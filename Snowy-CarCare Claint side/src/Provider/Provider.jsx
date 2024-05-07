import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const ContextAuth = createContext();
const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userDta, setUserDta] = useState(null);

  // Register User
  const emlPassRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  emlPassLogin
  const emlPassLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============= Social Login ============
  // social login provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const googleLogin = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const twitterLogin = () => {
    // setIsLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  // Logout account
  const logOutAcc = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || userDta?.email;
      const loggedUser = { email: userEmail };

      setUserDta(currentUser);
      setLoading(false);

      if (currentUser) {
        axios
          .post('http://localhost:3000/jwt', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('Token Response', res.data);
          });
      } else {
        axios
          .post('http://localhost:3000/logout', loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [userDta?.email]);

  const profileUpdate = (nam, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: nam,
      photoURL: photoUrl,
    });
  };
  const handleUpdateEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };

  // Delete Profile

  const handleDeleteAcc = () => {
    return deleteUser(auth.currentUser)
      .then(() => {
        // User deleted.
      })
      .catch((err) => {
        // An error ocurred
        console.log(err);
      });
  };

  // All data obj passing
  const authDta = {
    emlPassRegister,
    emlPassLogin,
    twitterLogin,
    gitHubLogin,
    googleLogin,
    logOutAcc,
    userDta,
    profileUpdate,
    handleUpdateEmail,
    handleDeleteAcc,
    loading,
    setLoading,
  };
  return (
    <ContextAuth.Provider value={authDta}>{children}</ContextAuth.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};
