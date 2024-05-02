import { signOut } from 'firebase/auth';
import styles from './Home.module.css';
import { auth } from '../../config/firebase';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Home = () => {
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  // useEffect(() => {
  //   console.log(auth.currentUser?.email);
  // });

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
    <div className={styles.main_home_page}>
      <div className={styles.logout_btn_box}>
        <button className={styles.logout_btn} onClick={logOut}>
          Log Out
        </button>
      </div>
      <h1>Home page</h1>
    </div>
  );
};
