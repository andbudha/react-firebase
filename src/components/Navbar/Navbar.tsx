import { useState } from 'react';
import styles from './Navbar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Navigate } from 'react-router-dom';

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
        <h2 className={styles.logo}>Firebase</h2>
      </div>
      <div className={styles.logout_btn_box}>
        <button className={styles.logout_btn} onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
