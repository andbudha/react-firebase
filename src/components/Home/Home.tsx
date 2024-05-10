import styles from './Home.module.css';
import { auth, dataBase } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Movie, Movies } from '../../assets/types';
import { collection, getDocs } from 'firebase/firestore';
import { GridCard } from '../GridCard/GridCard';
import { MovieForm } from '../MovieForm/MovieForm';
import { UpdateMovieForm } from '../UpdateMovieForm/UpdateMovieForm';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import FakeProgressBar from '../ProgressBar/FakeProgressBar';

export const Home = () => {
  const [movies, setMovies] = useState<null | Movies>(null);
  const [activeUpdateMovieForm, setActiveUpdateMovieForm] = useState(false);
  const [movieToUpdate, setMovieToUpdate] = useState<null | Movie>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentUserID, setCurrentUserID] = useState<undefined | string>(
    undefined
  );
  console.log(movies);
  const movieCollection = collection(dataBase, 'movies');
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getDocs(movieCollection);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (data) {
        setMovies(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setCurrentUserID(auth.currentUser?.uid);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main_home_page}>
      {isLoading ? <ProgressBar /> : <FakeProgressBar />}
      {!!activeUpdateMovieForm && (
        <UpdateMovieForm
          setActiveUpdateMovieForm={setActiveUpdateMovieForm}
          movieToUpdate={movieToUpdate}
          setIsLoading={setIsLoading}
          getData={getData}
        />
      )}
      <MovieForm
        getData={getData}
        setIsLoading={setIsLoading}
        currentUserID={currentUserID}
      />
      <GridCard
        movies={movies}
        getData={getData}
        setActiveUpdateMovieForm={setActiveUpdateMovieForm}
        setMovieToUpdate={setMovieToUpdate}
      />
    </div>
  );
};
