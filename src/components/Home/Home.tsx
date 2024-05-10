import styles from './Home.module.css';
import { useState } from 'react';
import { Movie, Movies } from '../../assets/types';
import { GridCard } from '../GridCard/GridCard';
import { MovieForm } from '../MovieForm/MovieForm';
import { UpdateMovieForm } from '../UpdateMovieForm/UpdateMovieForm';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import FakeProgressBar from '../ProgressBar/FakeProgressBar';

type HomeProps = {
  movies: Movies | null;
  isLoading: boolean;
  currentUserID: undefined | string;
  getData: () => void;
  setIsLoading: (newLoadingStatus: boolean) => void;
};
export const Home = ({
  movies,
  isLoading,
  currentUserID,
  getData,
  setIsLoading,
}: HomeProps) => {
  const [activeUpdateMovieForm, setActiveUpdateMovieForm] = useState(false);
  const [movieToUpdate, setMovieToUpdate] = useState<null | Movie>(null);

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
