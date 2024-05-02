import { signOut } from 'firebase/auth';
import styles from './Home.module.css';
import { auth } from '../../config/firebase';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    console.log(auth.currentUser?.email);
  });

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log(auth?.currentUser?.email);
    } catch (error) {
      console.log(error);
    }
  };

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
