import { useState } from 'react';
import styles from './Navbar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { NavLink, Navigate } from 'react-router-dom';

export default function Navbar() {
  const [loggedOut, setLoggedOut] = useState<boolean>(false);

  const logOut = async () => {
    try {
      await signOut(auth);
      setLoggedOut(true);
      console.log(auth.currentUser?.email);
      alert('You have successfully logged out!');
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedOut) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className={styles.navbar_main_box}>
      <div className={styles.logo_box}>
        <NavLink to={'/'} className={styles.logo}>
          {' '}
          <h2>Firebase</h2>
        </NavLink>
      </div>
      <div className={styles.btn_box}>
        <NavLink className={styles.my_movies_btn} to={'mymovies'}>
          <h4>My Movies</h4>
        </NavLink>
        <button className={styles.logout_btn} onClick={logOut}>
          <h3>Log Out</h3>
        </button>
      </div>
    </div>
  );
}
