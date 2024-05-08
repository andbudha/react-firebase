import styles from './Home.module.css';
import { dataBase } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Movies } from '../../assets/types';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from '../Navbar/Navbar';
import { GridCard } from '../GridCard/GridCard';
import { MovieForm } from '../MovieForm/MovieForm';

export const Home = () => {
  const [movies, setMovies] = useState<null | Movies>(null);
  console.log(movies);

  const movieCollection = collection(dataBase, 'movies');
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

  return (
    <div className={styles.main_home_page}>
      <Navbar />
      <MovieForm getData={getData} />
      <GridCard movies={movies} getData={getData} />
    </div>
  );
};
