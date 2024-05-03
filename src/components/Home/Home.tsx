import { signOut } from 'firebase/auth';
import styles from './Home.module.css';
import { auth, dataBase } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Movies } from '../../assets/types';
import { collection, getDocs } from 'firebase/firestore';

export const Home = () => {
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  const [movies, setMovies] = useState<null | Movies>();
  console.log(movies);

  const movieCollection = collection(dataBase, 'movies');
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

  const getData = async () => {
    try {
      const response = await getDocs(movieCollection);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (data) {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
