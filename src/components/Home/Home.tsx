import styles from './Home.module.css';
import { dataBase } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Movie, Movies } from '../../assets/types';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from '../Navbar/Navbar';
import { GridCard } from '../GridCard/GridCard';
import { MovieForm } from '../MovieForm/MovieForm';
import { UpdateMovieForm } from '../UpdateMovieForm/UpdateMovieForm';

export const Home = () => {
  const [movies, setMovies] = useState<null | Movies>(null);
  const [activeUpdateMovieForm, setActiveUpdateMovieForm] = useState(false);
  const [movieToUpdate, setMovieToUpdate] = useState<null | Movie>(null);

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
      {!!activeUpdateMovieForm && (
        <UpdateMovieForm
          setActiveUpdateMovieForm={setActiveUpdateMovieForm}
          movieToUpdate={movieToUpdate}
          getData={getData}
        />
      )}
      <Navbar />
      <MovieForm getData={getData} />
      <GridCard
        movies={movies}
        getData={getData}
        setActiveUpdateMovieForm={setActiveUpdateMovieForm}
        setMovieToUpdate={setMovieToUpdate}
      />
    </div>
  );
};
